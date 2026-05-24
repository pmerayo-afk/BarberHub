import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        BarberHub
      </Link>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/equipo">Equipo</Link>
        <Link to="/reservar">Reservar</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  )
}

export default Navbar