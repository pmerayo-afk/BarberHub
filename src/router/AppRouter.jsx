import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Team from '../pages/Team'
import Booking from '../pages/Booking'
import Contact from '../pages/Contact'
import Admin from '../pages/Admin'
import Login from '../pages/Login'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/equipo" element={<Team />} />
      <Route path="/reservar" element={<Booking />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRouter