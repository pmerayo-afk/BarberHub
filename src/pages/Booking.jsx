import { useState } from 'react'
import { services } from '../data/services'
import { barbers } from '../data/barbers'

function Booking() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedBarber, setSelectedBarber] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const availableHours = ['10:00', '11:00', '12:00', '16:00', '17:00', '18:00']

  const handleSubmit = (e) => {
    e.preventDefault()

    const bookingData = {
      service: selectedService,
      barber: selectedBarber,
      date: selectedDate,
      time: selectedTime
    }

    console.log('Reserva creada:', bookingData)
    alert('Reserva creada correctamente')
  }

  return (
    <section className="section booking-page">
      <h1>Reservar cita</h1>
      <p>Elige servicio, barbero, fecha y hora.</p>

      <form className="booking-form" onSubmit={handleSubmit}>
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

        <button className="btn btn-primary" type="submit">
          Confirmar reserva
        </button>
      </form>
    </section>
  )
}

export default Booking