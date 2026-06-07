import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

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

        {user ? (
          <div className="navbar-user">
            <img src={user.avatar} alt={user.name} className="navbar-avatar" />
            <span className="navbar-username">{user.name.split(' ')[0]}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Salir
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-secondary navbar-auth-btn">Acceder</Link>
            <Link to="/registro" className="btn btn-primary navbar-auth-btn">Registro</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Navbar
