import { barbers } from '../data/barbers'

function Team() {
  return (
    <section className="section">
      <h1>Nuestro equipo</h1>
      <p>Profesionales especializados en estilo masculino.</p>

      <div className="cards-grid">
        {barbers.map(barber => (
          <article className="service-card" key={barber.id}>
            <h3>{barber.name}</h3>
            <p>{barber.specialty}</p>
            <img className="barber-image" src={barber.image} alt={barber.name} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Team