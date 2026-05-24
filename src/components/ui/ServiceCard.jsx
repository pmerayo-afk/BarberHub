function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>

      <div className="service-card-footer">
        <span>{service.duration} min</span>
        <strong>{service.price}€</strong>
      </div>
    </article>
  )
}

export default ServiceCard