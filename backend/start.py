import os
import uvicorn

# Creo un archivo de arranque para railway, que es el que ejecuta el servidor
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000)) 
    uvicorn.run("api.api:app", host="0.0.0.0", port=port) #0.0.0.0 es para que el servidor sea accesible desde cualquier IP, y el puerto es el que me da railway.