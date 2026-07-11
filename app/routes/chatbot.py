from flask import Blueprint, request, jsonify, render_template
from groq import Groq
import os

# Create blueprint
chatbot_bp = Blueprint("chatbot", __name__)

# Initialize Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


# ✅ UI ROUTE (Fixes your /chatbot 404)
@chatbot_bp.route("/chatbot", methods=["GET"])
def chatbot_page():
    return render_template("chatbot.html")  # make sure this file exists


# ✅ API ROUTE (Frontend will call this)
@chatbot_bp.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "Invalid request"}), 400

        user_message = data.get("message")

        if not user_message:
            return jsonify({"error": "No message provided"}), 400

        # 🔥 Send request to Groq
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful AI study assistant."},
                {"role": "user", "content": user_message}
            ],
            model="llama-3.1-8b-instant"
        )

        # Extract reply safely
        reply = response.choices[0].message.content if response.choices else "No response"

        return jsonify({"reply": reply})

    except Exception as e:
        print("ERROR:", e)  # shows error in terminal
        return jsonify({"error": str(e)}), 500