import React from 'react';

const FooterLink = ({ text, url }) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};

export default FooterLink;
