import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import DetallesPokemon from "./components/DetallesPokemon"
import Pokemons from "./api/RailwayAPI";
import "./styles/tipos.css"; // Importado de manera global

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<DetallesPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App