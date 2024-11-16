from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import sqlite3

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str


conn = sqlite3.connect('electrodomesticos.db')

@app.get("/productos")
async def get_users():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM productos")
    producto = cursor.fetchall()
    return producto