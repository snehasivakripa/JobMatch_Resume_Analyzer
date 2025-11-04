from flask import Blueprint, request, jsonify
from database.models import SessionLocal, Resume

bp = Blueprint("search", __name__, url_prefix="/api")


@bp.route("/search", methods=["POST"])
def search_candidates():
    data = request.json
    keyword = data.get("keyword", "").lower()

    session = SessionLocal()
    results = []
    for r in session.query(Resume).all():
        if keyword in r.content.lower() or keyword in r.skills.lower():
            results.append({
                "id": r.id,
                "name": r.name,
                "email": r.email,
                "skills": r.skills,
                "filename": r.filename
            })
    session.close()
    return jsonify({"results": results})
