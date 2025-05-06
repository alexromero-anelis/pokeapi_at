# pokeapi_at
Este proyecto está realizado por Alejandro Romero y Tomás Primo. Nuestro primer proyecto juntos es una web de pokemon en el que abarcamos las siguientes funcionalidades básicas:

## Funcionalidades básicas de la aplicación
    - Gestión de usuarios: Los usuarios podrán registrarse e iniciar sesión
    - Mostrar todos los pokemons
    - Ver detalles del pokemon
    - Guardar pokemons como favoritos

## Tecnologías utilizadas
    - Frontend:
        - React con javascript
    - Backend:
        - Python con FastAPI
    - Base de datos:
        - PostgreSQL

## Uso de la aplicación en local

Para poder depurar y probar cambios en local se debe de hacer lo siguiente. Si queremos ejecutar el frontend usaremos los siguientes comandos:

### Frontend

```bash
    cd frontend
    npm install
    npm run dev
```

Para hacer que el backend escuche las llamadas del frontend en nuestro local, debemos lanzar el servidor Uvicorn siguiendo estos pasos:

### Backend

```bash
    cd .\backend\
    pip install -r requirements.txt
    cd .\api\
    uvicorn api:app --reload