import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Pokemons from "./api/api";
import "./styles/tipos.css"; // Importado de manera global

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App