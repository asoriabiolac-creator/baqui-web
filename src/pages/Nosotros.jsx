import React, { useEffect } from "react";
 // Asegúrate de tener tu CSS importado aquí

function Nosotros() {
  useEffect(() => {
    // === Animación de elementos al hacer scroll ===
    const animatedElements = document.querySelectorAll(".animated-element");

    function checkScroll() {
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.classList.add("active");
        }
      });
    }

    checkScroll();
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <main>
      {/* Sección principal nosotros */}
      <section className="baqui-section-nosotros">
        <div className="baqui-card-nosotros animated-element">
          <div className="logo-container">
            <img
              src="/imagen/baqui.png"
              alt="Equipo Baqui"
              className="baqui-img"
            />
          </div>
          <div className="text-content">
            <h1 className="title-animation">¿Quiénes Somos?</h1>
            <p>
              Somos <strong>Baqui</strong>, una empresa peruana dedicada a la
              producción y venta de productos lácteos frescos y saludables.
              Nuestra pasión es llevar bienestar, calidad y sabor auténtico a
              cada familia. Nuestro equipo está conformado por personas
              comprometidas con la excelencia y el desarrollo sostenible.
            </p>
          </div>
        </div>
      </section>

      <section className="nosotros-extra">
        {/* Historia */}
        <div className="nosotros-row">
          <div className="nosotros-block animated-element slide-in-left">
            <div className="icon-container">
              <i className="fas fa-history"></i>
            </div>
            <h2>Nuestra Historia</h2>
            <p>
              Baqui nació con el propósito de ofrecer productos lácteos de
              calidad a todas las familias peruanas. Desde nuestros inicios,
              hemos crecido gracias a la confianza de nuestros clientes y la
              pasión de nuestro equipo, manteniendo siempre nuestros valores de
              calidad y responsabilidad social.
            </p>
          </div>
        </div>

        {/* Por qué elegirnos */}
        <div className="nosotros-row">
          <div className="nosotros-block animated-element slide-in-right">
            <div className="icon-container">
              <i className="fas fa-star"></i>
            </div>
            <h2>¿Por qué elegirnos?</h2>
            <p>
              Elegir Baqui es optar por productos elaborados con los más altos
              estándares de calidad y frescura. Nos diferenciamos por nuestro
              compromiso con la salud, el sabor auténtico y la innovación
              constante en nuestros procesos y presentaciones.
            </p>
          </div>
        </div>

        {/* Propósito */}
        <div className="nosotros-row proposito-row">
          <div className="nosotros-block proposito-block animated-element scale-up">
            <div className="icon-container">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>Propósito</h2>
            <p>
              Mejorar la vida de las personas a través de una alimentación
              saludable, nutritiva y deliciosa. Buscamos ser la opción preferida
              de quienes valoran el bienestar y la calidad en su mesa.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="nosotros-row mision-vision-row">
          <div className="nosotros-mini-block animated-element fade-in">
            <div className="icon-container">
              <i className="fas fa-flag"></i>
            </div>
            <h3>Misión</h3>
            <p>
              Ofrecer productos lácteos frescos y saludables, comprometidos con
              la calidad y la satisfacción de nuestros clientes en todo el país.
            </p>
          </div>
          <div className="nosotros-mini-block animated-element fade-in">
            <div className="icon-container">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Visión</h3>
            <p>
              Ser la empresa líder en productos lácteos, reconocida por la
              excelencia, innovación y el bienestar que brindamos a las familias
              peruanas.
            </p>
          </div>
        </div>

        {/* Política de Calidad */}
        <div className="nosotros-row">
          <div className="nosotros-block animated-element slide-in-up">
            <div className="icon-container">
              <i className="fas fa-award"></i>
            </div>
            <h2>Política de Calidad</h2>
            <p>
              La calidad es nuestra máxima prioridad. Contamos con procesos
              rigurosos de selección de ingredientes, controles de producción y
              capacitación de nuestro personal, asegurando que cada producto
              cumpla con las normativas nacionales e internacionales y supere
              las expectativas de nuestros consumidores.
            </p>
          </div>
        </div>
      </section>

      <section className="equipo-section">
        <h2 className="equipo-title">NUESTRO EQUIPO</h2>
        <div className="equipo-grid">
          <div className="equipo-card animated-element slide-in-up">
            <img
              src="/imagen/Piero.jpg"
              alt="Nombre 1"
              className="equipo-img"
            />
            <div className="equipo-nombre">Piero Lopez Vargas</div>
            <br />
            <div className="equipo-cargo">
              Practicante de Ingeniería de Sistemas
            </div>
          </div>
          <div className="equipo-card animated-element slide-in-up">
            <img
              src="/imagen/Britney.jpg"
              alt="Nombre 2"
              className="equipo-img"
            />
            <div className="equipo-nombre">Britney Mejia Paulino</div>
            <br />
            <div className="equipo-cargo">Administradora</div>
          </div>
          <div className="equipo-card animated-element slide-in-up">
            <img src="/imagen/Jose.jpg" alt="Nombre 3" className="equipo-img" />
            <div className="equipo-nombre">Jose Calderon Cruces</div>
            <br />
            <div className="equipo-cargo">
              Practicante de Ingeniería de Sistemas
            </div>
          </div>
        </div>
      </section>
      <div className="custom-wave-2">
        <div className="wave-2"></div>
      </div>
    </main>
  );
}

export default Nosotros;
