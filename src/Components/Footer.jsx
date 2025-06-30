// File: src/components/Footer.jsx
import React from 'react';
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Adebayo Oladayo Matthew. All rights reserved.</p>
    </footer>
  );
}