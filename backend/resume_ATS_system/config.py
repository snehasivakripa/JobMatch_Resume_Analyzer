import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

ALLOWED_EXTENSIONS = {"pdf", "docx"}
MAX_CONTENT_LENGTH = 5 * 1024 * 1024  # 5MB

DB_URL = f"sqlite:///{os.path.join(BASE_DIR, 'resumes.db')}"
CORS_ORIGINS = ["http://localhost:4200"]
