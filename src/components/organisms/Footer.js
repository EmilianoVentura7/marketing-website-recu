import React from 'react';
import FooterLogo from '../atoms/FooterLogo';
import FooterLinksList from '../molecules/FooterLinkList';
import '../../styles/Footer.css';

const Footer = ({ logoSrc, links }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterLogo logoSrc={logoSrc} />
        <FooterLinksList links={links} />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 UP-Tech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
