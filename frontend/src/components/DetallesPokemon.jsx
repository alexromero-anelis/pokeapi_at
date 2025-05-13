"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "../styles/tipos.css"

export default function DetallesPokemon() 
{
    const [pokemon, setPokemon] = useState(null)
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
        setCargando(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => {
            setPokemon(data)
            setCargando(false)
            })
            .catch((error) => {
            console.error("Error al cargar el detalle del Pokémon:", error)
            setCargando(false)
            })
        }
    }, [id])

    const volverAtras = () => {
        navigate(-1)
    }

    if (cargando) 
    {
        return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-xl">Cargando detalles del Pokémon...</p>
        </div>
        )
    }

    if (!pokemon) 
    {
        return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-xl">No se encontró el Pokémon</p>
        </div>
        )
    }

    const obtenerColorFondo = () => {
        const tipoPrincipal = pokemon.types[0].type.name
        return `var(--type-${tipoPrincipal})`
    }

    return (
        <div className="min-h-screen p-6">
        <button onClick={volverAtras} className="mb-6 flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            <span>Volver</span>
        </button>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-white" style={{ backgroundColor: obtenerColorFondo() }}>
                <div className="flex justify-between items-center">
                    <div>
                    <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
                    <p className="text-xl">#{pokemon.id}</p>
                    <div className="flex gap-2 mt-2">
                        {pokemon.types.map((type) => (
                        <span key={type.type.name} className="px-3 py-1 bg-white/30 rounded-full text-white">
                            {type.type.name}
                        </span>
                        ))}
                    </div>
                    </div>
                    <img
                    src={pokemon.sprites.other["official-artwork"].front_default || "/placeholder.svg"}
                    alt={pokemon.name}
                    className="h-48 w-48 object-contain"
                    />
                </div>
            </div>

            <div className="p-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Estadísticas base</h2>
                    <div className="grid gap-4">
                        {pokemon.stats.map((stat) => (
                            <div key={stat.stat.name}>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium capitalize">{stat.stat.name}</span>
                                <span>{stat.base_stat}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                className="h-2.5 rounded-full"
                                style={{
                                    width: `${Math.min(100, (stat.base_stat / 255) * 100)}%`,
                                    backgroundColor: obtenerColorFondo(),
                                }}
                                ></div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Características</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-gray-500">Altura</p>
                            <p className="text-lg font-medium">{pokemon.height / 10} m</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-gray-500">Peso</p>
                            <p className="text-lg font-medium">{pokemon.weight / 10} kg</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
                        <div className="grid gap-2">
                            {pokemon.abilities.map((ability) => (
                            <div key={ability.ability.name} className="bg-gray-100 p-3 rounded-lg">
                                <p className="capitalize font-medium">
                                {ability.ability.name.replace("-", " ")}
                                {ability.is_hidden && <span className="text-gray-500 text-sm ml-2">(Oculta)</span>}
                                </p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}