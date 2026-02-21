from pydantic_settings import BaseSettings, SettingsConfigDict
class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_ignore_empty=True)

    # Old OpenRouter (you can keep or remove)
    # OPENROUTER_API_KEY: str
    # OPENROUTER_MODEL: str = "anthropic/claude-3.5-sonnet"

    # New Groq settings
    GROQ_API_KEY: str
    GROQ_MODEL: str = "llama-3.3-70b-versatile"   # default good free model

settings = Settings()