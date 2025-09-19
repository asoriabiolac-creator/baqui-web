import React, { useState } from 'react'

function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const [modalVisible, setModalVisible] = useState(false)

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/api/contactanos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (result.success) {
        alert('Mensaje enviado correctamente.')
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
        setModalVisible(true)
      } else {
        alert('Error al enviar el mensaje: ' + result.error)
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      alert('Ocurrió un error al enviar el mensaje.')
    }
  }

  return (
    <main>
      <section id="Contacto" className="contacto">
        <div className="contenedor">
          
          {/* TEXTO + FORMULARIO */}
          <div className="formulario" data-aos="fade-right" data-aos-duration="1000">
            <h2>Contáctenos</h2>
            <p className="subtitulo">
              Si tiene alguna consulta, póngase en contacto con nosotros.
            </p>
            <p className="descripcion">
              Llena el formulario y nos pondremos en contacto a la brevedad.
            </p>

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="fila">
                <input 
                  type="text" 
                  name="nombre" 
                  placeholder="Su nombre" 
                  value={formData.nombre} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Su correo electrónico" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <input 
                type="text" 
                name="asunto" 
                placeholder="Asunto" 
                value={formData.asunto} 
                onChange={handleChange} 
              />
              <textarea 
                name="mensaje" 
                rows="5" 
                placeholder="Mensaje" 
                value={formData.mensaje} 
                onChange={handleChange} 
              />
              <button type="submit">Enviar mensaje</button>
            </form>
          </div>

          {/* MAPA */}
          <div className="mapa" data-aos="fade-left" data-aos-duration="1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21385.766517776516!2d-77.06961801214482!3d-12.077066550429924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c91a5000653d%3A0x1654d5501a2ea1e9!2sMuseo%20Larco!5e0!3m2!1ses-419!2spe!4v1757354795383!5m2!1ses-419!2spe" 
              width="600" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            ></iframe>
          </div>
        </div>
      </section>

      <div className="custom-wave-2">
        <div className="wave-2"></div>
      </div>

      {/* MODAL DE CONFIRMACIÓN */}
      {modalVisible && (
        <div id="modalConfirmacion" className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setModalVisible(false)}>&times;</span>
            <h3>✅ Mensaje enviado correctamente</h3>
            <button className="modal-button" onClick={() => setModalVisible(false)}>Volver al inicio</button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Contactanos
