from flask import Flask
from flask_cors import CORS
from config import CORS_ORIGINS, MAX_CONTENT_LENGTH
from routes.upload import bp as upload_bp
from routes.search import bp as search_bp
from routes.resumes import bp as resumes_bp

app = Flask(__name__)
CORS(app, origins=CORS_ORIGINS)
app.config["MAX_CONTENT_LENGTH"] = MAX_CONTENT_LENGTH

# Register routes
app.register_blueprint(upload_bp)
app.register_blueprint(search_bp)
app.register_blueprint(resumes_bp)

if __name__ == "__main__":
    app.run(debug=True)
