import React from 'react';


function Home() {
  return (
    <div>
      <main>
        <section className="baqui-section" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <div>
        <img src="/imagen/FONDO MEJORADO.png" alt="Baqui mas na" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
    </div>
</section>

      <section className="compromiso-section" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className="compromiso-container" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
          <h2>NUESTRO COMPROMISO</h2>
          <p className="compromiso-texto">
            En Baqui nos comprometemos a ofrecer productos lácteos 100% naturales, frescos y sin conservantes,
            elaborados con altos estándares de higiene y calidad para cuidar tu salud.
          </p>
        </div>
      </section>

      <hr className="linea-gris"/>

      <section className="productos-destacados" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <h2>NUESTROS PRODUCTOS</h2>
        <div className="productos-grid">

          <div className="producto-card" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <div className="producto-img-container">
              <img src="/imagen/KEFIR.png" alt="Kéfir Baqui"/>
              <div className="producto-overlay"></div>
            </div>
            <div className="producto-info">
              <h3>KÉFIR</h3>
              <p>Bebida probiótica natural</p>
            </div>
          </div>

          <div className="producto-card" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <div className="producto-img-container">
              <img src="/imagen/frutosrojos.png" alt="Yogurt de Frutos Rojos"/>
              <div className="producto-overlay"></div>
            </div>
            <div className="producto-info">
              <h3>YOGURT FRUTOS ROJOS</h3>
              <p>Delicioso y nutritivo</p>
            </div>
          </div>

          <div className="producto-card" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <div className="producto-img-container">
              <img src="/imagen/arandano.png" alt="Yogurt de Arándano"/>
              <div className="producto-overlay"></div>
            </div>
            <div className="producto-info">
              <h3>YOGURT DE ARÁNDANO</h3>
              <p>Antioxidante natural</p>
            </div>
          </div>
        </div>

        <div className="ver-mas-container">
          <a href="/productos.html" className="ver-mas-btn">Ver todos los productos</a>
        </div>
      </section>

      <hr className="linea-gris"/>

      <section className="detalle-productos" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className="detalle-item">
          <div className="detalle-texto" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <h2>KÉFIR</h2>
            <p>
              Bebida probiotica que se obtiene<br />
              al fermentar leche de vaca, buena<br />
              para la salud mejorando la<br/>
              tolerancia a la lactosa y es un<br/>
              probiotico natural
            </p>
          </div>
          <div className="detalle-img" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <img src="/imagen/KEFIR.png" alt="Kéfir"/>
          </div>
        </div>

        <hr className="linea-gris-completa"/>

        <div className="detalle-item">
          <div className="detalle-img2" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <img src="/imagen/arandano.png" alt="Yogur"/>
          </div>
          <div className="detalle-texto detalle-texto2" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <h2>YOGURES NATURALES</h2>
            <p>
              Son lácteos cremosos con<br/>
              fruta natural añadida, que<br/>
              combina sabor y nutricion.<br/>
              Aporta calcio, proteinas y<br/>
              probióticos.<br/>
            </p>
          </div>
        </div>
      </section>

      <div className="custom-wave-2">
        <div className="wave-2"></div>
      </div>
      </main>
    </div>
  )
}

export default Home;
