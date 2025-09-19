import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footerGO">
      <div className="footer-content">
        
        {/* Logo e info */}
        <div className="footer-col footer-logo-info">
          <div className="logo-info-container">
            <img src="/imagen/baqui.png" alt="Logo" />
            <div>
              <div className="footer-empresa">BIOLAC S.A.C</div>
              <div className="footer-ruc">RUC: 20614207664</div>
            </div>
          </div>
        </div>

        {/* Links internos */}
        <div className="footer-col footer-links">
          <Link to="/">INICIO</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/nosotros">NOSOTROS</Link>
          <Link to="/promociones">PROMOCIONES</Link>
        </div>

        {/* Redes sociales */}
        <div className="footer-col footer-social">
          <div className="footer-title">Síguenos</div>
          <div className="social-link">
            <img src="/imagen/facebook.png" alt="Facebook" className="social-icon"/>
            <a href="https://web.facebook.com/profile.php?id=61572982743698" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <div className="social-link">
            <img src="/imagen/instagram.png" alt="Instagram" className="social-icon"/>
            <a href="https://www.instagram.com/baquilacteosperu/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div className="social-link">
            <img src="/imagen/tktk.png" alt="TikTok" className="social-icon"/>
            <a href="https://www.tiktok.com/@baquilacteosperu?_t=ZS-8zXlNaDYYCX&_r=1" target="_blank" rel="noreferrer">TikTok</a>
          </div>
          <div className="social-link">
            <img src="/imagen/wasap.jpg" alt="WhatsApp" className="social-icon"/>
            <a href="http://wa.me/51972258994" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        {/* Libro de reclamaciones */}
        <div className="footer-col footer-libro">
          <div className="footer-title">Libro de Reclamaciones</div>
          <Link to="/libro">
            <img src="/imagen/libro.jpeg" alt="Libro de reclamaciones" className="libro-img"/>
          </Link>
        </div>

      </div>

      {/* Derechos reservados */}
      <div className="footer-reservados">
        Todos los derechos reservados ©2025 Baqui, Perú.
      </div>
    </footer>
  )
}

export default Footer
