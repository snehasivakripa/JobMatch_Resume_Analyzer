from sqlalchemy import Column, Integer, String, Text, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from config import DB_URL

Base = declarative_base()
engine = create_engine(DB_URL, echo=False)
SessionLocal = sessionmaker(bind=engine)

class Resume(Base):
    __tablename__ = "resumes"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email = Column(String(100))
    skills = Column(Text)
    filename = Column(String(200))
    content = Column(Text)

# Create tables
Base.metadata.create_all(bind=engine)
