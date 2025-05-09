import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState(0); // Estado para almacenar el total de pokemones de la API
  const [paginaActual, setPaginaActual] = useState(1); //Paginación de la web
  const limitePokemonsPag = 54;

  //Para que la aplicación sepa en todo momento cuantos pokemones hay en la API debo obtener el count de la API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.count);
      })
      .catch((err) => {
        console.error("Error al obtener el total de pokemones:", err);
      });
  }, []);

  //Este useEffect se encarga de obtener el número de pokemones que yo le indique en el offset y limit
  useEffect(() => {
    if (totalPokemons > 0) {
      //Calculo el offset usando la página actual y el total de pokemones por página
      const offset = (paginaActual - 1) * limitePokemonsPag; // por ejemplo. pag 1 -> 1-1= 0 * 50 = 0

      fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limitePokemonsPag}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPokemonList(data.results);
        })
        .catch((err) => {
          console.error("Error al obtener los pokemones:", err);
        });
    }
  }, [paginaActual, totalPokemons]); //Este useEffect se ejecuta cada vez que cambia la página actual o el total de pokemones

  //Obtengo el total de página, para ello divido el total de pokemones entre los pokemones por página
  const totalPaginas = Math.ceil(totalPokemons / limitePokemonsPag);

  //Función para ir una página hacia delante o hacia atrás
  const siguientePagina = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.name} url={pokemon.url} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={paginaAnterior}
          disabled={paginaActual === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Anterior
        </button>
        <span>
          Página {paginaActual} ... {totalPaginas}
        </span>
        <button
          onClick={siguientePagina}
          disabled={paginaActual === totalPaginas}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
