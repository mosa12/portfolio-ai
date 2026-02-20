from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from core.ai_engine import get_ai_response, initialize_vector_store
from typing import List, Optional

router = APIRouter(prefix="/api")

class ChatMessage(BaseModel):
    role: str          # "user" | "assistant"
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    resume_context: Optional[bool] = True

@router.post("/chat")
async def chat_endpoint(req: ChatRequest):
    try:
        # In real app → you would get user_id/session and load conversation history
        # Here we just use what frontend sends (last N messages)

        response = get_ai_response(
            messages=[{"role": m.role, "content": m.content} for m in req.messages],
            use_resume=req.resume_context
        )

        return {
            "role": "assistant",
            "content": response,
            "timestamp": "now"  # you can use datetime
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.on_event("startup")
async def startup_event():
    initialize_vector_store()   # load resume once at startup