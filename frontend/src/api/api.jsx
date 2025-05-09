import React, { useEffect, useState } from 'react';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapiat-production.up.railway.app/pokemons')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los pokemons');
        }
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hubo un problema:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando pokemons...</p>;

  return (
    <div>
      <h2>Pokemons Test</h2>
      <ul>
        {pokemons.map((poke) => (
          <li key={poke.id}>
            {poke.id} - {poke.name} - {poke.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemons;
