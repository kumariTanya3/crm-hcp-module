
from app.database.db import Base
from app.database.db import engine

from app.models.interaction import Interaction

Base.metadata.create_all(bind=engine)

print("Tables Created Successfully")