from flask import Blueprint, render_template, request, redirect, url_for
from flask_login import login_required, current_user

from app.models import StudyMaterial
from app.extensions import db

notes_bp = Blueprint("notes", __name__)


# ======================================
# View Notes + Search
# ======================================
@notes_bp.route("/notes")
@login_required
def my_notes():

    # Get search query from URL
    query = request.args.get("q")

    if query:
        uploaded_notes = StudyMaterial.query.filter(
            StudyMaterial.user_id == current_user.id,
            StudyMaterial.original_filename.contains(query)
        ).all()
    else:
        uploaded_notes = StudyMaterial.query.filter_by(
            user_id=current_user.id
        ).all()

    return render_template(
        "my_notes.html",
        notes=uploaded_notes,
        search_query=query
    )


# ======================================
# Delete Note
# ======================================
@notes_bp.route("/delete-note/<int:id>")
@login_required
def delete_note(id):

    note = StudyMaterial.query.get_or_404(id)

    if note.user_id != current_user.id:
        return "Unauthorized Access", 403

    db.session.delete(note)
    db.session.commit()

    return redirect(url_for("notes.my_notes"))