import Card from "../components/Card"

export default function Home() {
    return (
      <div className="p-6">
        <div className="mb-6 text-lg">
            <Card url="https://pokeapi.co/api/v2/pokemon/150" />
        </div>
      </div>
    )
  }
  