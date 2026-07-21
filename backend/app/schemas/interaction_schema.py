
from pydantic import BaseModel


class InteractionRequest(BaseModel):

    user_prompt: str


class InteractionResponse(BaseModel):

    hcp_name: str

    interaction_type: str

    interaction_date: str

    interaction_time: str

    attendees: str

    location: str

    topics: str

    materials: list[str]

    samples: list[str]

    sentiment: str

    outcomes: str

    follow_up: str

    ai_suggestions: list[str]