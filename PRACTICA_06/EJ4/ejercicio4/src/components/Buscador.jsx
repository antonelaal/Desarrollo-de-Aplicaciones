function Buscador({ valor, onCambiar }) {
  return (
    <input
      type="text"
      placeholder="Buscar usuario por nombre..."
      value={valor}
      onChange={(event) => onCambiar(event.target.value)}
    />
  )
}

export default Buscador