import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveMenu from './responsive';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="imagen/baqui.png" alt="Logo" className="logo" />
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/nosotros">NOSOTROS</Link></li>
            <li><Link to="/productos">PRODUCTOS</Link></li>
            <li><Link to="/promociones">PROMOCIONES</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <Link to="/contactanos" className="contactanos-link">CONTACTANOS</Link>
          <div className="hamburger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>

      <div className="dropdown-menu">
        <Link to="/">INICIO</Link>
        <Link to="/Nosotros">NOSOTROS</Link>
        <Link to="/Productos">PRODUCTOS</Link>
        <Link to="/Promociones">PROMOCIONES</Link>
        <Link to="/Contactanos">CONTACTANOS</Link>
      </div>

      <div className="custom-wave">
        <div className="wave"></div>
      </div>

      <ResponsiveMenu />
    </header>
  );
}

export default Header;
