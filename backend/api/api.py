from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"saludo_inicial": "Buenas tardes desde FastAPI corriendo en el lado del servidor"}