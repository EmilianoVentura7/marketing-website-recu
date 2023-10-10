import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, text, onClick }) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-links" onClick={onClick}>
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
