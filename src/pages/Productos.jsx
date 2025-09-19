import React from "react";
 // Asegúrate de crear este archivo con tus estilos

function Productos() {
  return (
    <main>
      <section className="productos-section">
        <h1>NUESTROS PRODUCTOS</h1>
        <div className="productos-grid">
          <div className="producto">
            <img src="/imagen/KEFIR.png" alt="KEFIR" />
            <p>
              KEFIR
              <br />
              <strong>S/15</strong>
            </p>
          </div>

          <div className="producto">
            <img src="/imagen/arandano.png" alt="YOGUR DE FRESA" />
            <p>
              YOGUR DE
              <br />
              FRESA
              <br />
              <strong>S/15</strong>
            </p>
          </div>

          <div className="producto">
            <img src="/imagen/frutosrojos.png" alt="YOGUR DE FRUTOS ROJOS" />
            <p>
              YOGUR DE
              <br />
              FRUTOS ROJOS
              <br />
              <strong>S/15</strong>
            </p>
          </div>

          <div className="producto">
            <img src="/imagen/arandano.png" alt="YOGUR DE ARÁNDANO" />
            <p>
              YOGUR DE
              <br />
              ARÁNDANO
              <br />
              <strong>S/15</strong>
            </p>
          </div>

          <div className="producto">
            <img src="/imagen/queso.jpeg" alt="QUESO CREMA DE KEFIR" />
            <p>
              QUESO CREMA
              <br />
              DE KEFIR
              <br />
              <strong>S/12</strong>
            </p>
          </div>

          <div className="producto">
            <img src="/imagen/mantequilla.jpeg" alt="MANTEQUILLA DE KEFIR" />
            <p>
              MANTEQUILLA
              <br />
              DE KEFIR
              <br />
              <strong>S/15</strong>
            </p>
          </div>
        </div>
      </section>
      <div className="custom-wave-2">
        <div className="wave-2"></div>
      </div>
    </main>
  );
}

export default Productos;
