import React from 'react';
import { Link } from 'react-router-dom';

const PiePagina = () => {
  return (
    <footer className="footer-indigo">
      <div className="footer-content">
        
        {/* Seccion de Contacto */}
        <div className="footer-section">
          <h3>CONTACTO</h3>
          <ul className="footer-list">
            <li>+34 900 123 456</li>
            <li>hola@indigocine.com</li>
            <li>Av. del Cine, 42. Madrid, España</li>
          </ul>
        </div>

        {/* Seccion de Avisos Legales */}
        <div className="footer-section">
          <h3>LEGAL</h3>
          <ul className="footer-list">
            <li><Link to="/">Política de privacidad</Link></li>
            <li><Link to="/">Política de cookies</Link></li>
            <li><Link to="/">Términos de compra</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cines Índigo - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default PiePagina;