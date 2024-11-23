from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from db import get_db_connection
from fastapi.middleware.cors import CORSMiddleware

origins = ["*"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    id: int
    name: str
    email: str

conn = get_db_connection()

@app.get("/productos")
async def get_users():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM productos")
    rows = cursor.fetchall()

    column_names = [description[0] for description in cursor.description]

    result = []
    for row in rows:
        result.append({column_names[i]: row[i] for i in range(len(row))})

    return result