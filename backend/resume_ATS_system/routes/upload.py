from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from services.parser import extract_text, extract_name, extract_email, extract_skills
from database.models import SessionLocal, Resume
from config import UPLOAD_FOLDER, ALLOWED_EXTENSIONS

bp = Blueprint("upload", __name__, url_prefix="/api")

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route("/upload_resume", methods=["POST"])
def upload_resume():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    if not allowed_file(file.filename):
        return jsonify({"error": "Invalid file type"}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    text = extract_text(file_path)
    name = extract_name(filename)
    email = extract_email(text)
    skills = extract_skills(text)

    session = SessionLocal()
    resume = Resume(name=name, email=email, skills=skills, filename=filename, content=text)
    session.add(resume)
    session.commit()
    resume_id = resume.id
    session.close()

    return jsonify({"id": resume_id, "message": f"{filename} uploaded successfully!"})
