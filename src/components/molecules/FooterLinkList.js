import React from "react";
import FooterLink from "../atoms/FooterLink";

const FooterLinksList = ({ links }) => {
  return (
    <div className="footer-links">
      <ul>
        {links &&
          links.map((link, index) => (
            <FooterLink key={index} text={link.text} url={link.url} />
          ))}
      </ul>
    </div>
  );
};

export default FooterLinksList;
