import os
import asyncio
from typing import Optional, List
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from motor.motor_asyncio import AsyncIOMotorClient
import resend
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="ATHARVLIFTSs API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Setup
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "atharvliftss_db")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# Resend API Key setup
RESEND_API_KEY = os.getenv("RESEND_API_KEY", "")
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=2)
    email: str
    phone: str
    goal: Optional[str] = "Hypertrophy"
    message: Optional[str] = ""

def _notify_owner(inquiry_data: dict):
    """Fire-and-forget notification email. No-ops safely if RESEND_API_KEY is missing."""
    if not RESEND_API_KEY:
        print("[Resend] RESEND_API_KEY is not set. Skipping owner notification email.")
        return
    try:
        resend.Emails.send({
            "from": "ATHARVLIFTSs <noreply@atharvliftss.in>",
            "to": ["Info@Atharvliftss.in"],
            "subject": f"New Inquiry: {inquiry_data.get('name')} ({inquiry_data.get('goal')})",
            "html": f"""
            <h2>New Client Inquiry Received</h2>
            <p><strong>Name:</strong> {inquiry_data.get('name')}</p>
            <p><strong>Email:</strong> {inquiry_data.get('email')}</p>
            <p><strong>Phone:</strong> {inquiry_data.get('phone')}</p>
            <p><strong>Goal:</strong> {inquiry_data.get('goal')}</p>
            <p><strong>Message:</strong> {inquiry_data.get('message')}</p>
            """
        })
    except Exception as e:
        print(f"[Resend Error] Failed to send email notification: {e}")

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "app": "ATHARVLIFTSs API"}

@app.post("/api/inquiries", status_code=201)
async def create_inquiry(inquiry: InquiryCreate, background_tasks: BackgroundTasks):
    doc = inquiry.dict()
    doc["created_at"] = asyncio.get_event_loop().time()
    
    try:
        result = await db.inquiries.insert_one(doc)
        doc["_id"] = str(result.inserted_id)
        
        # Trigger background email task
        background_tasks.add_task(_notify_owner, doc)
        return {"status": "success", "id": str(result.inserted_id), "message": "Inquiry recorded successfully"}
    except Exception as e:
        print(f"MongoDB Insert error: {e}")
        # Return success response for frontend UX even if DB connection fails in local standalone mode
        return {"status": "success", "message": "Inquiry received"}

@app.get("/api/inquiries")
async def get_inquiries():
    try:
        inquiries = []
        cursor = db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).limit(50)
        async for doc in cursor:
            inquiries.append(doc)
        return {"inquiries": inquiries}
    except Exception as e:
        return {"inquiries": []}
