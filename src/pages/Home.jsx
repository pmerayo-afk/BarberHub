import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ServiceCard from '../components/ui/ServiceCard'

function Home() {
  return (
    <>
    <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Barbería premium</span>
          <h1>Tu próximo corte empieza aquí</h1>
          <p>
            Reserva tu cita online, elige tu barbero favorito y disfruta de una experiencia profesional.
          </p>

          <div className="hero-actions">
            <Link to="/reservar" className="btn btn-primary">
              Reservar cita
            </Link>
            <Link to="/servicios" className="btn btn-secondary">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Servicios populares</h2>

        <div className="cards-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
    </section>
    </>
  )
}

export default Home