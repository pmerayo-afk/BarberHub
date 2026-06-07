import { useState } from 'react'
import { services } from '../data/services'
import { barbers } from '../data/barbers'

function Booking() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedBarber, setSelectedBarber] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const availableHours = ['10:00', '11:00', '12:00', '16:00', '17:00', '18:00']
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault()

    const bookingData = {
      service: selectedService,
      barber: selectedBarber,
      date: selectedDate,
      time: selectedTime,
      name: clientName,
      phone: clientPhone
    }

    console.log('Reserva creada:', bookingData)

    setSuccessMessage('Reserva solicitada correctamente. Te contactaremos para confirmarla.')

    setSelectedService('')
    setSelectedBarber('')
    setSelectedDate('')
    setSelectedTime('')
    setClientName('')
    setClientPhone('')
  }

  return (
    <section className="section booking-page">
      <div className="booking-header">
        <h1>Reservar cita</h1>
        <p>
          Reserva tu cita en pocos pasos. Elige el servicio, tu barbero preferido
          y la hora que mejor te venga.
        </p>
      </div>

      <div className="booking-card">
        {successMessage && (
          <p className="booking-success">{successMessage}</p>
        )}

        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Tu nombre"
              required
            />
          </label>

          <label>
            Teléfono
            <input
              type="tel"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="Ej: 123 456 789"
              required
            />
          </label>

          <label>
            Servicio
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="">Selecciona un servicio</option>
              {services.map(service => (
                <option key={service.id} value={service.name}>
                  {service.name} - {service.price}€
                </option>
              ))}
            </select>
          </label>

          <label>
            Barbero
            <select
              value={selectedBarber}
              onChange={(e) => setSelectedBarber(e.target.value)}
              required
            >
              <option value="">Selecciona un barbero</option>
              {barbers.map(barber => (
                <option key={barber.id} value={barber.name}>
                  {barber.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Fecha
            <input
              type="date"
              value={selectedDate}
              min={today}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </label>

          <label>
            Hora
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              <option value="">Selecciona una hora</option>
              {availableHours.map(hour => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </label>

          {(selectedService || selectedBarber || selectedDate || selectedTime) && (
            <div className="booking-summary">
              <h3>Resumen de la reserva</h3>
              <p><strong>Servicio:</strong> {selectedService || 'Sin seleccionar'}</p>
              <p><strong>Barbero:</strong> {selectedBarber || 'Sin seleccionar'}</p>
              <p><strong>Fecha:</strong> {selectedDate || 'Sin seleccionar'}</p>
              <p><strong>Hora:</strong> {selectedTime || 'Sin seleccionar'}</p>
            </div>
          )}

          <button className="btn btn-primary" type="submit">
            Confirmar reserva
          </button>

          <a
            className="btn btn-whatsapp"
            href="https://wa.me/34123456789"
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
            </svg>Reservar por WhatsApp
          </a>
        </form>
      </div>
    </section>
  )
}

export default Booking