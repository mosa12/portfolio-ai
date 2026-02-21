import os
import json
from typing import List, Dict
from openai import OpenAI
from core.config import settings

# Global resume text
resume_text = ""

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=settings.GROQ_API_KEY,
)

def load_resume() -> str:
    global resume_text
    path = os.path.join(os.path.dirname(__file__), "../data/resume.json")
    
    if not os.path.exists(path):
        return "No resume data available."
    
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Convert to readable text
    lines = []
    lines.append(f"# {data.get('name', 'Unknown')}")
    lines.append(data.get('title', ''))
    lines.append("")
    lines.append("## Contact")
    lines.append(f"Email: {data.get('email', '')}")
    lines.append(f"Phone: {data.get('phone', '')}")
    lines.append(f"Location: {data.get('location', '')}")
    lines.append(f"LinkedIn: {data.get('linkedin', '')}")
    lines.append(f"GitHub: {data.get('github', '')}")
    lines.append("")
    lines.append("## Summary")
    lines.append(data.get('summary', ''))
    lines.append("")
    
    for section in ["skills", "projects", "education", "languages"]:
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
    global resume_text
    load_resume()


def get_relevant_resume_context(query: str) -> str:
    if not resume_text:
        return ""
    
    # Simple keyword-based context (upgrade to vector DB later)
    lines = resume_text.split("\n")
    relevant = []
    q_lower = query.lower()
    
    for line in lines:
        if any(word in line.lower() for word in q_lower.split()):
            relevant.append(line.strip())
    
    if relevant:
        return "\n".join(relevant[:15])
    return resume_text[:2000]  # fallback


def get_ai_response(messages: List[Dict], use_resume: bool = True) -> str:
    system_content = """You are a friendly, concise portfolio assistant.
You represent Md Mosaraf Hossain.
Answer in first person when talking about experience, projects, skills, education.
Be helpful, truthful, and slightly humorous when appropriate.
Use the provided resume context to give accurate answers."""

    if use_resume and resume_text:
        context = get_relevant_resume_context(messages[-1]["content"] if messages else "")
        system_content += f"\n\n=== RESUME CONTEXT ===\n{context}\n=== END RESUME ==="

    # This is the critical part — define full_messages here
    full_messages = [
        {"role": "system", "content": system_content},
        *messages[-12:]   # keep last 12 messages for context
    ]

    try:
        response = client.chat.completions.create(
            model=settings.GROQ_MODEL,
            messages=full_messages,           # ← this must be defined
            temperature=0.7,
            max_tokens=1200,
        )
        return response.choices[0].message.content.strip()
    
    except Exception as e:
        return f"⚠ Sorry — AI issue: {str(e)}"