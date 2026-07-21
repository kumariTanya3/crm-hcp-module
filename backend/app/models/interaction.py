
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from app.database.db import Base


class Interaction(Base):

    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcp_name = Column(String(255))

    interaction_type = Column(String(100))

    interaction_date = Column(String(50))

    interaction_time = Column(String(50))

    attendees = Column(Text)

    location = Column(String(255))

    topics = Column(Text)

    materials = Column(Text)

    samples = Column(Text)

    sentiment = Column(String(50))

    outcomes = Column(Text)

    follow_up = Column(Text)