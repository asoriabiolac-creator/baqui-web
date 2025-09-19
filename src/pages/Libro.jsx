import React, { useState } from "react";

function Libro() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    tipo_documento: "",
    numero_documento: "",
    email: "",
    telefono: "",
    departamento: "",
    provincia: "",
    distrito: "",
    direccion: "",
    tipo: "",
    detalle: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/reclamos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMensaje("✅ Reclamo enviado correctamente");
        setFormData({
          nombres: "",
          apellidos: "",
          tipo_documento: "",
          numero_documento: "",
          email: "",
          telefono: "",
          departamento: "",
          provincia: "",
          distrito: "",
          direccion: "",
          tipo: "",
          detalle: "",
        });
      } else {
        setMensaje("❌ Error al enviar el reclamo");
      }
    } catch (error) {
      setMensaje("⚠️ Error de conexión con el servidor");
    }
  };

  return (
    <main>
      <section className="libro-reclamaciones">
        <h2>Libro de Reclamaciones</h2>
        <div className="libro-info">
          <p>
            Si tienes alguna queja, reclamo o sugerencia sobre nuestros productos
            o servicios, por favor llena el siguiente formulario. Atenderemos tu
            solicitud de manera rápida y responsable.
          </p>
        </div>

        <form className="libro-form" onSubmit={handleSubmit}>
          <div className="libro-form-row">
            <div className="libro-form-group">
              <label htmlFor="nombres">Nombres</label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </div>
            <div className="libro-form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="libro-form-row">
            <div className="libro-form-group">
              <label htmlFor="tipo_documento">Tipo de Documento</label>
              <select
                id="tipo_documento"
                name="tipo_documento"
                value={formData.tipo_documento}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona</option>
                <option value="dni">DNI</option>
                <option value="ruc">RUC</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="carnet">C. Extranjería</option>
              </select>
            </div>
            <div className="libro-form-group">
              <label htmlFor="numero_documento">Número de Documento</label>
              <input
                type="text"
                id="numero_documento"
                name="numero_documento"
                value={formData.numero_documento}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="libro-form-row">
            <div className="libro-form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="libro-form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="libro-form-row">
            <div className="libro-form-group">
              <label htmlFor="departamento">Departamento</label>
              <input
                type="text"
                id="departamento"
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                required
              />
            </div>
            <div className="libro-form-group">
              <label htmlFor="provincia">Provincia</label>
              <input
                type="text"
                id="provincia"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                required
              />
            </div>
            <div className="libro-form-group">
              <label htmlFor="distrito">Distrito</label>
              <input
                type="text"
                id="distrito"
                name="distrito"
                value={formData.distrito}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="libro-form-row">
            <div className="libro-form-group" style={{ flex: "1 1 100%" }}>
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="libro-form-row">
            <div className="libro-form-group">
              <label htmlFor="tipo">Tipo de Reclamo</label>
              <select
                id="tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona</option>
                <option value="queja">Queja</option>
                <option value="reclamo">Reclamo</option>
                <option value="sugerencia">Sugerencia</option>
              </select>
            </div>
          </div>

          <div className="libro-form-row">
            <div className="libro-form-group" style={{ flex: "1 1 100%" }}>
              <label htmlFor="detalle">Descripción</label>
              <textarea
                id="detalle"
                name="detalle"
                rows="4"
                value={formData.detalle}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="libro-form-row libro-form-actions">
            <button type="submit">Enviar Reclamo</button>
          </div>

          {mensaje && <p className="mensaje">{mensaje}</p>}

          <div className="libro-legal">
            <small>
              Conforme a la Ley N°29571, tu reclamo será atendido en un plazo no
              mayor a 30 días calendario.
            </small>
          </div>
        </form>
      </section>
      <div className="custom-wave-2">
        <div className="wave-2"></div>
      </div>
    </main>
  );
}

export default Libro;
