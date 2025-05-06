from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pokemon(BaseModel):
    id: int
    name: str
    type: str
    
pokemons = [
    Pokemon(id=1, name="Pikachu", type="Electric"),
    Pokemon(id=2, name="Charmander", type="Fire"),
    Pokemon(id=3, name="Squirtle", type="Water"),
    Pokemon(id=4, name="Bulbasaur", type="Grass"),
    Pokemon(id=5, name="Jigglypuff", type="Normal"),
]

@app.get("/pokemons")
async def root():
    return pokemons