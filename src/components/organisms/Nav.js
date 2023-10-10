import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../molecules/NavItem';
import DarkModeButton from '../atoms/DarkModeButton';
import '../../styles/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModoOscuro, setIsModoOscuro] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModoOscuro = () => {
    setIsModoOscuro(!isModoOscuro); // Cambia el estado del modo oscuro
  
    // Aquí puedes agregar lógica para cambiar el tema de tu aplicación
    const appElement = document.querySelector('.App'); // Selecciona el elemento con clase 'App'
  
    if (appElement) {
      // Si se encontró el elemento, cambia su clase según el estado del modo oscuro
      if (isModoOscuro) {
        appElement.classList.remove('modo-oscuro');
      } else {
        appElement.classList.add('modo-oscuro');
      }
    }
  };
  

  return (
    <nav className={`navbar ${isModoOscuro ? 'modo-oscuro' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          UP-Tech
        </Link>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavItem to="/" text="Inicio" onClick={toggleMenu} />
          <NavItem to="/features" text="Productos" onClick={toggleMenu} />
          <NavItem to="/contact" text="Contacto" onClick={toggleMenu} />
        </ul>

        <DarkModeButton onClick={toggleModoOscuro} />
      </div>
    </nav>
  );
};

export default Nav;
