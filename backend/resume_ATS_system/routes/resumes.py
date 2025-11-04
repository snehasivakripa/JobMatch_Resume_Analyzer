from flask import Blueprint, jsonify
from database.models import SessionLocal, Resume

bp = Blueprint("resumes", __name__, url_prefix="/api")


@bp.route("/resumes", methods=["GET"])
def get_all_resumes():
    session = SessionLocal()
    resumes = session.query(Resume).all()
    session.close()

    return jsonify([{
        "id": r.id,
        "name": r.name,
        "email": r.email,
        "skills": r.skills,
        "filename": r.filename
    } for r in resumes])
