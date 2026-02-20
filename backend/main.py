from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router

app = FastAPI(title="AI Portfolio Chat")

# CORS middleware – allows frontend (localhost:5173 / 3000) to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "*"],  # "*" is convenient for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all API routes from routes.py
app.include_router(router)


# Simple health check endpoint – useful for debugging & frontend readiness checks
@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "service": "portfolio-ai-backend",
        "timestamp": "now"  # you can import datetime and use datetime.utcnow() if you want real time
    }


# Optional: root endpoint that returns a friendly message
@app.get("/")
async def root():
    return {
        "message": "Welcome to Mosaraf's AI Portfolio Backend",
        "docs": "/docs",           # Swagger UI
        "health": "/health"
    }