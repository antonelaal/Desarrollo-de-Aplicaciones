function Card({ nombre, descripcion, categoria }) {
  return (
    <div className="Tarjeta">
      <h2>{nombre}</h2>

      <p>{descripcion}</p>

      <span>{categoria}</span>
    </div>
  );
}

export default Card;
