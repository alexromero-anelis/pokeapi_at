"use client"

import { useState } from "react"
import { Search, Menu } from "lucide-react"

export default function Navbar() 
{
    
    /*
    Creamos una variable de estado:
    - searchTerm guarda el texto que escribe el usuario.
    - setSearchTerm es la función que usamos para cambiar ese texto (función ya existente gracias al hook(herramienta) useState).
    - useState("") significa que el valor inicial está vacío.
    */
    const [searchTerm, setSearchTerm] = useState("")

    // Sirve para que no se recargue la página al enviar el formulario ya que los formularios lo tienen como evento por defecto.
    const handleSearch = (e) => { e.preventDefault() } 

    // Elementos de navegación
    const navItems = [
        { name: "Inicio", href: "" },
    ]

    return (
        <nav className="bg-red-600 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                {/* Logo */}
                <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-black mr-2">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
                            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black transform -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white border-2 border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
                        </div>
                        <span className="text-white font-bold text-xl">PokeAPI AT</span>
                    </div>
                </div>

                {/* Elementos de navegación */}
                <div className="hidden md:flex items-center space-x-4">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Barra de búsqueda */}
                <form onSubmit={handleSearch} className="hidden md:flex">
                    <input type="text" placeholder="Buscar Pokémon..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-64 px-3 py-1 rounded bg-white text-black focus:outline-none"/>
                    <button type="submit" className="ml-2 px-3 py-1 rounded bg-white text-red-600 hover:bg-red-200">
                        <Search className="h-5 w-5" />
                    </button>
                </form>
                </div>
            </div>
        </nav>
    )
}