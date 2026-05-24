import { services } from '../data/services'
import ServiceCard from '../components/ui/ServiceCard'

function Services() {
  return (
    <section className="section">
      <h1>Nuestros servicios</h1>
      <p>Cortes, barba y tratamientos profesionales.</p>

      <div className="cards-grid">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services