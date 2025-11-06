# JobMatch Resume Analyzer

**JobMatch Resume Analyzer** is a full-stack AI-powered web application that helps recruiters and job seekers by parsing resumes, extracting relevant information, and allowing keyword-based candidate search. It supports PDF and DOCX resumes and provides skill extraction and matching functionality.

---

## 🚀 Features

- 📄 Upload resumes (PDF, DOCX)  
- 🧾 Extract candidate information: name, email, skills  
- 🔍 Search candidates by keywords or skills  
- 🗂️ Retrieve all uploaded resumes with structured data  
- 💻 Angular frontend for easy interaction with backend APIs  

---

## 🧠 How It Works

1. **Resume Upload** – Users upload PDF or DOCX resumes via `/api/upload_resume`.  
2. **Parsing & Extraction** – Text, name, email, and skills are extracted from the resume.  
3. **Storage** – Resume data is stored in a database (SQLAlchemy ORM).  
4. **Search / Filter** – Recruiters can search resumes by keywords using `/api/search`.  
5. **Retrieve Resumes** – List all uploaded resumes using `/api/resumes`.  
6. **Frontend Interaction** – Angular app communicates with backend APIs for upload, search, and display.  

---

## 🛠️ Tech Stack

**Frontend**  
- Angular 16+  
- TypeScript  
- Angular Material  
- RxJS  
- HTML5 / SCSS  

**Backend**  
- Python 3.11+  
- Flask – REST API framework  
- Flask-CORS – Enable cross-origin requests  
- PyPDF2 – Extract text from PDF files  
- python-docx – Extract text from DOCX files  
- SQLAlchemy – ORM for database access  
- SQLite (or any configured database)  
- Werkzeug – Secure file uploads  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/snehasivakripa/JobMatch_Resume_Analyzer.git
cd JobMatch_Resume_Analyzer
