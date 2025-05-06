import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemons] = useState([])  // <- CORREGIDO

  useEffect(() => {
    fetch("http://127.0.0.1:8000/pokemons")
      .then(response => response.json())
      .then(data => setPokemons(data))
      .catch(error => console.error('No se han encontrado los pokemons:', error));
  }, [])

  return (
    <>
      <h1>API Pokemon</h1>
      <ul>
        {
          pokemon.map(p => (
            <li key={p.id}>
              {p.id} - {p.name} - {p.type}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
