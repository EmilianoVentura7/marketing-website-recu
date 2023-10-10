import React from 'react';
import '../../styles/Caracteristicas.css';

const Caracteristicas = ({ title, description, colorClass }) => {
  return (
    <div className={`feature-card ${colorClass}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Caracteristicas;
