"use client";

import { useState, useEffect } from "react";

export default function Card({ url = "" }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [url]);

  // Si aún no se han cargado los datos, muestra un mensaje de carga, necesario para evitar que se renderice la tarjeta antes de que los datos estén disponibles
  if (!pokemon) {
    return (
      <div className="bg-white p-4 rounded shadow max-w-xs text-center">
        <p>Cargando...</p>
      </div>
    );
  }

  // Si ya se cargaron los datos, se renderiza la tarjeta
  return (
    <div className="bg-white p-4 rounded shadow max-w-xs hover:shadow-lg transition">
      {/* Imagen del pokémon */}
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        className="h-40 mx-auto"
        alt={pokemon.name}
      />

      {/* Nombre del Pokémon */}
      <h3 className="text-lg font-bold text-center capitalize mt-2">
        {pokemon.name}
      </h3>

      {/* ID del Pokémon */}
      <p className="text-sm text-center text-gray-500">#{pokemon.id}</p>

      {/* Tipos del Pokémon, cada uno con un fondo basado en la variable CSS (tipos.css) correspondiente */}
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="px-2 py-1 text-white text-xs rounded"
            style={{ backgroundColor: `var(--type-${type.type.name})` }}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
