import { useEffect, useState } from 'react'
import TarjetaUsuario from './components/TarjetaUsuario'
import Buscador from './components/Buscador'
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setUsuarios(datos.users)
        setCargando(false)
      })
  }, [])

  const usuariosFiltrados = usuarios.filter((usuario) =>
    `${usuario.firstName} ${usuario.lastName}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  )

  if (cargando) {
    return <p>Cargando usuarios...</p>
  }

  return (
    <div className="contenedor">
      <h1>Directorio de Usuarios</h1>

      <Buscador valor={busqueda} onCambiar={setBusqueda} />

      {usuariosFiltrados.length === 0 ? (
        <p>No se encontraron usuarios con ese nombre.</p>
      ) : (
        <div className="lista-usuarios">
          {usuariosFiltrados.map((usuario) => (
            <TarjetaUsuario
              key={usuario.id}
              nombre={`${usuario.firstName} ${usuario.lastName}`}
              email={usuario.email}
              ciudad={usuario.address.city}
              empresa={usuario.company.name}
              edad={usuario.age}
              telefono={usuario.phone}
              imagen={usuario.image}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App