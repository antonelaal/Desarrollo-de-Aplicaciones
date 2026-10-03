import "./App.css";
import Card from "./components/Tarjeta";

function App() {
  const videojuegos = [
    {
      id: 1,
      nombre: "Minecraft",
      descripcion: "Videojuego de construcción y supervivencia.",
      categoria: "Aventura",
    },
    {
      id: 2,
      nombre: "Little Nightmares",
      descripcion: "Juego de suspenso para guiar a una niña a escapar.",
      categoria: "Terror",
    },
    {
      id: 3,
      nombre: "Mario Kart",
      descripcion: "Juego de carreras con personajes de Nintendo.",
      categoria: "Carreras",
    },
    {
      id: 4,
      nombre: "Firewatch",
      descripcion: "Una aventura de misterio en un bosque donde se maneja a un vigilante de incendios.",
      categoria: "Aventura",
    },
    {
      id: 5,
      nombre: "Resident Evil",
      descripcion: "Videojuego de terror y supervivencia.",
      categoria: "Terror",
    },
  ];

  return (
    <div className="app">
      <h1>Catálogo de Videojuegos</h1>

      <p>Mi primer catálogo en React</p>

      <div className="catalogo">
        {videojuegos.map((videojuego) => (
          <Card
            key={videojuego.id}
            nombre={videojuego.nombre}
            descripcion={videojuego.descripcion}
            categoria={videojuego.categoria}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
