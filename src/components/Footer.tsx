// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Create a CSS file for footer-specific styles

function Footer() {
  return (
    <div className="footer-wrap pd-20 mb-20 card-box">
      ALEO SIMPLE TEXT MESSENGER - PROJECT <strong>BY</strong>{' '}
      <a href="https://github.com/Elexy101" target="_blank" rel="noopener noreferrer">
        Emmanuel Elexy
      </a>
    </div>
  );
}

export default Footer;
