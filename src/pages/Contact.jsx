function Contact() {
  return (
    <section className="section contact-section">
      <div className="contact-header">
        <h1>Contacto</h1>

        <h2>¿Quieres reservar tu cita o tienes alguna duda?</h2>

        <p>
          Escríbenos, llámanos o ven a visitarnos. En BarberHub te ayudamos a
          encontrar el corte, arreglo de barba o estilo que mejor encaje contigo.
          Tu próximo cambio de look empieza aquí.
        </p>
        <br/>
      </div>

      <div className="contact-content">
        <article className="service-card contact-card">
          <h3>Datos de contacto</h3>

          <ul className="contact-list">
            <li>
              <strong>Teléfono:</strong>{" "}
              <a href="tel:+34600123456">123 456 789</a>
            </li>

            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:contacto@barberhub.com">
                contacto@barberhub.com
              </a>
            </li>

            <li>
              <strong>Dirección:</strong> Calle Ejemplo 12, Zaragoza
            </li>
          </ul>

          <div className="contact-hours">
            <h3>Horario</h3>
            <p>Lunes a viernes: 10:00 - 20:00</p>
            <p>Sábados: 10:00 - 14:00</p>
            <p>Domingos: cerrado</p>
          </div>

          <div className="contact-actions">
            <a className="btn" href="tel:+34123456789">
              Llamar ahora
            </a>

            <a
              className="btn btn-secondary"
              href="https://wa.me/+34123456789"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth={1.5} stroke="currentColor" className="message-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 
              17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 
              6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 
              1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 
              7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
            Reservar por WhatsApp
            </a>
          </div>
        </article>

        <article className="service-card contact-map-card">
          <h3>Cómo llegar</h3>

          <iframe
            title="Ubicación de BarberHub en Zaragoza"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d592.7762750330883!2d-0.9432200451440593!3d41.5876139061006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1780867633597!5m2!1ses!2ses"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe"
          />
        </article>
      </div>
    </section>
  )
}

export default Contact