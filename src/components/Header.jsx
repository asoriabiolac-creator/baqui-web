import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveMenu from './responsive';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src="imagen/baqui.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/productos">PRODUCTOS</Link></li>
            <li><Link to="/promociones">PROMOCIONES</Link></li>
            <li><Link to="/nosotros">NOSOTROS</Link></li>
            <li><Link to="/contactanos" className="contactanos-link">CONTÁCTANOS</Link></li>
          </ul>
        </div>
      </nav>

      <div className="custom-wave">
        <div className="wave"></div>
      </div>
    </header>
  );
}

export default Header;
