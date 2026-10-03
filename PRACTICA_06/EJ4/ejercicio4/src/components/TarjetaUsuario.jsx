function TarjetaUsuario({ nombre, email, ciudad, empresa, edad, telefono, imagen }) {
  return (
    <article className="tarjeta-usuario">
      <img src={imagen} alt={nombre} className="foto-usuario" />
      <h3>{nombre}</h3>
      <p>Correo: {email}</p>
      <p>Ciudad: {ciudad}</p>
      <p>Empresa: {empresa}</p>
      <p>Edad: {edad} años</p>
      <p>Teléfono: {telefono}</p>
    </article>
  )
}

export default TarjetaUsuario