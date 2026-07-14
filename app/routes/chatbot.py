from flask import Blueprint, request, jsonify, render_template
from flask_login import login_required, current_user
from groq import Groq
import os

from app.rag_utils import search_chunks

# =====================================================
# Blueprint
# =====================================================

chatbot_bp = Blueprint("chatbot", __name__)

# =====================================================
# Environment Variables
# =====================================================

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

MODEL_NAME = os.getenv(
    "GROQ_MODEL",
    "llama-3.3-70b-versatile"
)

if not GROQ_API_KEY:
    raise ValueError(
        "GROQ_API_KEY is missing. Please add it in your .env file."
    )

client = Groq(api_key=GROQ_API_KEY)

# =====================================================
# Notes Folder
# =====================================================

NOTES_FOLDER = "app/notes_data"
os.makedirs(NOTES_FOLDER, exist_ok=True)

# =====================================================
# Chatbot UI
# =====================================================

@chatbot_bp.route("/", methods=["GET"])
@login_required
def chatbot_page():
    return render_template("chatbot.html")


# =====================================================
# Chat API
# =====================================================

@chatbot_bp.route("/chat", methods=["POST"])
@login_required
def chat():

    try:

        # -----------------------------------------
        # Read JSON
        # -----------------------------------------

        data = request.get_json(silent=True)

        if not data:
            return jsonify({
                "error": "Invalid request."
            }), 400

        user_message = data.get("message", "").strip()

        if user_message == "":
            return jsonify({
                "error": "Message cannot be empty."
            }), 400

        # -----------------------------------------
        # Improve short queries
        # -----------------------------------------

        if len(user_message.split()) <= 5:
            user_message = (
                "Explain this topic clearly: "
                + user_message
            )

        # -----------------------------------------
        # Retrieve Notes using RAG
        # -----------------------------------------

        relevant_notes = search_chunks(
            user_message,
            current_user.id
        )

        # -----------------------------------------
        # Fallback to stored text file
        # -----------------------------------------

        if not relevant_notes:

            print("Using fallback notes file...")

            notes_file = os.path.join(
                NOTES_FOLDER,
                f"{current_user.id}.txt"
            )

            if os.path.exists(notes_file):

                with open(
                    notes_file,
                    "r",
                    encoding="utf-8"
                ) as file:

                    relevant_notes = file.read()[:2500]

        if not relevant_notes:
            relevant_notes = "No relevant notes found."

        # -----------------------------------------
        # Prompt
        # -----------------------------------------

        messages = [

            {
                "role": "system",

                "content": """
You are an AI Study Assistant.

Rules:

1. Answer using the provided notes.

2. Explain concepts clearly.

3. If only partial information exists, still help.

4. Do not say 'Not in notes' unless nothing is relevant.

5. Keep answers simple.

6. Use bullet points whenever useful.

7. Give exam-oriented answers.
"""
            },

            {
                "role": "user",

                "content": f"""
NOTES

{relevant_notes}


QUESTION

{user_message}
"""
            }

        ]

        # -----------------------------------------
        # Groq API
        # -----------------------------------------

        response = client.chat.completions.create(

            model=MODEL_NAME,

            messages=messages,

            temperature=0.4,

            max_tokens=500

        )

        reply = response.choices[0].message.content.strip()

        # -----------------------------------------
        # Logging
        # -----------------------------------------

        print("\n==============================")
        print("User :", current_user.id)
        print("Question :", user_message)
        print("Model :", MODEL_NAME)
        print("==============================\n")

        return jsonify({
            "reply": reply
        })

    except Exception as e:

        print("CHATBOT ERROR")
        print(e)

        return jsonify({
            "error": str(e)
        }), 500