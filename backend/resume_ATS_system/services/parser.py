import re
from PyPDF2 import PdfReader
import docx

SKILLS_LIST = ["python", "java", "sql", "react", "angular", "javascript", "aws", "docker", "machine learning"]

def extract_text(file_path):
    ext = file_path.rsplit(".", 1)[1].lower()
    text = ""
    if ext == "pdf":
        reader = PdfReader(file_path)
        for page in reader.pages:
            text += page.extract_text() + "\n"
    elif ext == "docx":
        doc = docx.Document(file_path)
        for para in doc.paragraphs:
            text += para.text + "\n"
    return text

def extract_email(text):
    match = re.search(r'[\w\.-]+@[\w\.-]+', text)
    return match.group(0) if match else "N/A"

def extract_name(filename):
    return filename.split('.')[0].replace("_", " ").title()

def extract_skills(text):
    found = [skill for skill in SKILLS_LIST if skill.lower() in text.lower()]
    return ", ".join(found) if found else "N/A"
