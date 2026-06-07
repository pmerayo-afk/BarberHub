import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ServiceCard from '../components/ui/ServiceCard'

function Home() {
  const popularServices = services.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Barbería premium</span>

          <h2>Cortes precisos, barba cuidada y estilo a tu medida</h2>

          <p>
            Reserva tu cita en pocos pasos, elige tu barbero favorito y disfruta
            de un servicio profesional cuidado al detalle.
          </p>

          <div className="hero-actions">
            <Link to="/reservar" className="btn btn-primary">
              Reservar cita
            </Link>

            <Link to="/servicios" className="btn btn-secondary">
              Ver servicios
            </Link>
          </div>

          <div className="hero-highlights">
            <span>Reserva rápida</span>
            <span>Barberos profesionales</span>
            <span>Atención personalizada</span>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="section-header">
          <h2>Servicios populares</h2>
          <p>
            Elige entre nuestros servicios más solicitados y reserva tu cita en
            pocos clics.
          </p>
        </div>

        <div className="cards-grid">
          {popularServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="section-actions">
          <Link to="/servicios" className="btn btn-secondary">
            Ver todos los servicios
          </Link>
        </div>
      </section>

      <section className="section why-section">
        <div className="section-header">
          <h2>¿Por qué elegir BarberHub?</h2>
          <p>
            Combinamos técnica, estilo y atención cercana para que cada visita
            sea una experiencia cómoda y profesional.
          </p>
        </div>

        <div className="cards-grid">
          <article className="service-card">
            <h3>Reserva online</h3>
            <p>
              Elige servicio, barbero, fecha y hora sin llamadas ni esperas.
            </p>
          </article>

          <article className="service-card">
            <h3>Estilo personalizado</h3>
            <p>
              Te asesoramos según tu tipo de pelo, rostro y estilo diario.
            </p>
          </article>

          <article className="service-card">
            <h3>Acabado profesional</h3>
            <p>
              Trabajamos cada detalle para que salgas con un resultado limpio y cuidado.
            </p>
          </article>
        </div>
      </section>

      <section className="home-cta">
        <h2>¿Listo para tu próximo corte?</h2>
        <p>
          Reserva tu cita y ven a disfrutar de una experiencia BarberHub.
        </p>

        <Link to="/reservar" className="btn btn-primary">
          Reservar ahora
        </Link>
      </section>
    </>
  )
}

export default Home