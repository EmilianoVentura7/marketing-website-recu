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
    setIsModoOscuro(!isModoOscuro); 
  
    const appElement = document.querySelector('.App');
  
    if (appElement) {
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
