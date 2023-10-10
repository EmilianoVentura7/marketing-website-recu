import React from 'react';

const DarkModeButton = ({ onClick }) => {
  return (
    <button className="dark-mode-button" onClick={onClick}>
      Modo Oscuro
    </button>
  );
};

export default DarkModeButton;
