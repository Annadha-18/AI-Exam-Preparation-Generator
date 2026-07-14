import os
from dotenv import load_dotenv

# ===================================
# Load environment variables
# ===================================
load_dotenv()

BASE_DIR = os.path.abspath(os.path.dirname(__file__))


class Config:
    # ===================================
    # Flask Configuration
    # ===================================
    SECRET_KEY = os.getenv("SECRET_KEY", "exam_project_secret_key")

    # ===================================
    # Database Configuration
    # ===================================
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "sqlite:///" + os.path.join(BASE_DIR, "instance", "database.db"),
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # ===================================
    # Upload Configuration
    # ===================================
    UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")

    # Create upload folder if it doesn't exist
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    # Maximum upload size (20 MB)
    MAX_CONTENT_LENGTH = 20 * 1024 * 1024

    # Allowed file types
    ALLOWED_EXTENSIONS = {"pdf", "docx", "txt"}

    # ===================================
    # Groq AI Configuration
    # ===================================
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    GROQ_MODEL = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")

    # ===================================
    # PDF Processing
    # ===================================
    PDF_MAX_CHARS = 3000

    # ===================================
    # Session Configuration
    # ===================================
    SESSION_PERMANENT = False
    SESSION_TYPE = "filesystem"