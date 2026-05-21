import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PiePagina = () => {
  return (
    <footer className="footer-indigo">
      <div className="footer-content">
        {/* Sección de Contacto */}
        <div className="footer-section">
          <h3>CONTACTO</h3>
          <ul className="footer-list">
            <li>
              <Phone size={18} className="footer-icon" />
              <span>+34 900 123 456</span>
            </li>
            <li>
              <Mail size={18} className="footer-icon" />
              <span>hola@indigocine.com</span>
            </li>
            <li>
              <MapPin size={18} className="footer-icon" />
              <span>Av. del Cine, 42. Madrid, España</span>
            </li>
          </ul>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section">
          <h3>SÍGUENOS</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Sección de Avisos Legales */}
        <div className="footer-section">
          <h3>LEGAL</h3>
          <ul className="footer-list">
            <li><Link to="/privacidad">Política de privacidad</Link></li>
            <li><Link to="/cookies">Política de cookies</Link></li>
            <li><Link to="/terminos">Términos de compra</Link></li>
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