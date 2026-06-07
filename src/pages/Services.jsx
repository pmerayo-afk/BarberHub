import { services } from '../data/services'
import ServiceCard from '../components/ui/ServiceCard'

function Services() {
  return (
    <section className="section services-section">
      <div className="services-header">
        <h1>Nuestros servicios</h1>

        <p>
          Elige el servicio que mejor encaja contigo. Desde un corte clásico
          hasta un arreglo completo de barba, trabajamos cada detalle para que
          salgas con un estilo limpio, cuidado y personalizado.
        </p>
      </div>

      <div className="services-intro-card">
        <p>
          Todos nuestros servicios incluyen asesoramiento personalizado según tu
          tipo de pelo, estilo y mantenimiento diario.
        </p>
      </div>

      <div className="cards-grid services-grid">
        {services.length > 0 ? (
          services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="empty-services">
            No hay servicios disponibles en este momento.
          </p>
        )}
      </div>

      <div className="services-cta">
        <h2>¿Ya sabes qué servicio quieres?</h2>
        <p>
          Reserva tu cita y elige el horario que mejor te venga.
        </p>

        <a href="/reservar" className="btn">
          Reservar cita
        </a>
      </div>
    </section>
  )
}

export default Services