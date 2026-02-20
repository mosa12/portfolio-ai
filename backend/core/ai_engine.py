import os
import json
from typing import List, Dict
from openai import OpenAI
from core.config import settings

# Global (loaded once)
vector_store = None
resume_text = ""

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=settings.OPENROUTER_API_KEY,
)

def load_resume() -> str:
    global resume_text
    path = os.path.join(os.path.dirname(__file__), "../data/resume.json")
    
    if not os.path.exists(path):
        return "No resume data available."
    
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Very naive → convert to markdown-like text
    lines = []
    lines.append(f"# {data.get('name', 'Unknown')}")
    lines.append(data.get('title', ''))
    lines.append("")
    lines.append("## Contact")
    lines.append(data.get('email', ''))
    lines.append(data.get('phone', ''))
    lines.append(data.get('location', ''))
    lines.append("")
    lines.append("## Summary")
    lines.append(data.get('summary', ''))
    lines.append("")
    
    for section in ["experience", "education", "skills", "projects"]:
        if section in data:
            lines.append(f"## {section.title()}")
            if isinstance(data[section], list):
                for item in data[section]:
                    lines.append(f"- {item}")
            else:
                lines.append(str(data[section]))
            lines.append("")
    
    resume_text = "\n".join(lines)
    return resume_text


def initialize_vector_store():
    """In real app → use vector DB. Here we just load text."""
    global vector_store
    load_resume()
    vector_store = "loaded"  # placeholder


def get_relevant_resume_context(query: str) -> str:
    """Dummy version — in real app use embeddings + top-k"""
    if not resume_text:
        return ""
    
    # Very naive keyword match (replace with real RAG later)
    lines = resume_text.split("\n")
    relevant = []
    q_lower = query.lower()
    
    for line in lines:
        if any(word in line.lower() for word in q_lower.split()):
            relevant.append(line.strip())
    
    if relevant:
        return "\n".join(relevant[:15])  # limit size
    return resume_text[:2000]  # fallback


def get_ai_response(messages: List[Dict], use_resume: bool = True) -> str:
    system_content = """You are a friendly, concise portfolio assistant.
You represent the person whose resume is provided.
Answer in first person when talking about experience/projects.
Be helpful, truthful, and slightly humorous when appropriate."""

    if use_resume and resume_text:
        context = get_relevant_resume_context(messages[-1]["content"])
        system_content += f"\n\n=== RESUME CONTEXT (most relevant parts) ===\n{context}\n=== END RESUME ==="

    full_messages = [
        {"role": "system", "content": system_content},
        *messages[-12:]   # keep last 12 messages max (context limit safety)
    ]

    try:
        response = client.chat.completions.create(
            model=settings.OPENROUTER_MODEL,
            messages=full_messages,
            temperature=0.7,
            max_tokens=1200,
        )
        return response.choices[0].message.content.strip()
    
    except Exception as e:
        return f"⚠ Sorry — AI is having a moment... ({str(e)})"