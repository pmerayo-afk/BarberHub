import { barbers } from '../data/barbers'

function Team() {
  return (
    <section className="section team-section">
      <div className="team-header">
        <h1>Nuestro equipo</h1>
        <p>
          Conoce a nuestro equipo de barberos. Cada uno tiene su propio estilo,
          técnica y especialidad para ayudarte a encontrar el look que mejor va contigo.
        </p>
      </div>

      <div className="cards-grid team-grid">
        {barbers.map(barber => (
          <article className="service-card barber-card" key={barber.id}>
            <img
              className="barber-image"
              src={barber.image}
              alt={`Foto de ${barber.name}, especialista en ${barber.specialty}`}
              loading="lazy"
            />

            <div className="barber-info">
              <h3>{barber.name}</h3>
              <p className="barber-specialty">{barber.specialty}</p>

              <a href="/reservar" className="btn barber-btn">
                Reservar con {barber.name.split(' ')[0]}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Team