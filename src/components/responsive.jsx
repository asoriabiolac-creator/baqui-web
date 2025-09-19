import React, { useState } from "react";

function ResponsiveMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      {/* Botón hamburguesa */}
      <div
        className={`hamburger-menu ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú desplegable */}
      <nav className={`dropdown-menu ${isActive ? "active" : ""}`}>
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default ResponsiveMenu;
