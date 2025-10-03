import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Promociones() {
  useEffect(() => {
    if (window.AOS) window.AOS.init();
  }, []);

  return (
    <main>
      {/* 
      {/* 
        <div className="container pt-5 my-1">
          <h2 className="fw-bold mb-5 promociones-title text-center">
            NUESTRAS PROMOCIONES
          </h2>

          <div className="row">
            <aside className="col-12 col-md-3 mb-5">
              <div className="card shadow-sm p-5 aside-card">
                <h5 className="mb-3 aside-title">Categorías</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#" className="category-link">
                      Kéfir <span className="text-muted">+</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="category-link">
                      Yogur de Arándano <span className="text-muted">+</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="category-link">
                      Yogur de Fresa <span className="text-muted">+</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="category-link">
                      Yogur de Frutos Rojos <span className="text-muted">+</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            <section id="promociones-productos" className="col-12 col-md-9">
              <div className="row g-4">
                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
                  <div className="card h-100 shadow-sm custom-card">
                    <img
                      src="/imagen/KEFIR.png"
                      className="card-img-top custom-card-img"
                      alt="Kéfir en promoción"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">KÉFIR</h5>
                      <p className="card-text text-muted">Bebida probiótica natural</p>
                      <p className="card-text price fw-bold">
                        S/12.00{' '}
                        <span className="text-decoration-line-through text-muted">
                          S/15.00
                        </span>
                      </p>
                      <a
                        href="https://api.whatsapp.com/send/?phone=51972258994"
                        className="btn add-to-cart"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agregar
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
                  <div className="card h-100 shadow-sm custom-card">
                    <img
                      src="/imagen/frutosrojos2.png"
                      className="card-img-top custom-card-img"
                      alt="Yogurt Frutos Rojos en promoción"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">YOGURT FRUTOS ROJOS</h5>
                      <p className="card-text text-muted">Delicioso y nutritivo</p>
                      <p className="card-text price fw-bold">
                        S/12.00{' '}
                        <span className="text-decoration-line-through text-muted">
                          S/15.00
                        </span>
                      </p>
                      <a
                        href="https://api.whatsapp.com/send/?phone=51972258994"
                        className="btn add-to-cart"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agregar
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
                  <div className="card h-100 shadow-sm custom-card">
                    <img
                      src="/imagen/arandano.png"
                      className="card-img-top custom-card-img"
                      alt="Yogurt de Arándano en promoción"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">YOGURT DE ARÁNDANO</h5>
                      <p className="card-text text-muted">Antioxidante natural</p>
                      <p className="card-text price fw-bold">
                        S/12.00{' '}
                        <span className="text-decoration-line-through text-muted">
                          S/15.00
                        </span>
                      </p>
                      <a
                        href="https://api.whatsapp.com/send/?phone=51972258994"
                        className="btn add-to-cart"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agregar
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
                  <div className="card h-100 shadow-sm custom-card">
                    <img
                      src="/imagen/mantequilla.jpeg"
                      className="card-img-top custom-card-img"
                      alt="Mantequilla de Kéfir en promoción"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">MANTEQUILLA DE KÉFIR</h5>
                      <p className="card-text text-muted">Pura y saludable</p>
                      <p className="card-text price fw-bold">
                        S/12.00{' '}
                        <span className="text-decoration-line-through text-muted">
                          S/15.00
                        </span>
                      </p>
                      <a
                        href="https://api.whatsapp.com/send/?phone=51972258994"
                        className="btn add-to-cart"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agregar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      */}
      
      <img src="/imagen/FONDOPROMOCIONES.png" alt="Fondo Promociones" className="img-fluid mx-auto d-block w-75 container pt-5 my-1" />
      {/* Olas decorativas al final */}
      <div className="custom-wave-2">
        <div className="wave-2"></div>
      </div>
    </main>
  );
}

export default Promociones;
