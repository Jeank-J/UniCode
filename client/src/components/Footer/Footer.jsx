import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Columna de Logo/Info */}
          <div className="footer-section about">
            <div className="logo-icon footer-logo">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
              <span className="footer-logo-text">UniCode</span>
            </div>
            <p className="footer-description">
              Plataforma de gestión académica y programación competitiva para la comunidad de la Universidad de la Amazonia.
            </p>
          </div>

          {/* Columna de Enlaces Rápidos */}
          <div className="footer-section links">
            <h4>Plataforma</h4>
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/contests">Concursos</a></li>
              <li><a href="/teams">Equipos</a></li>
              <li><a href="/submissions">Envíos</a></li>
            </ul>
          </div>

          {/* Columna de Soporte/Legal */}
          <div className="footer-section links">
            <h4>Soporte</h4>
            <ul>
              <li><a href="/docs">Documentación</a></li>
              <li><a href="/help">Centro de Ayuda</a></li>
              <li><a href="/privacy">Privacidad</a></li>
              <li><a href="/terms">Términos</a></li>
            </ul>
          </div>

          {/* Columna de Contacto */}
          <div className="footer-section contact">
            <h4>Contacto</h4>
            <p>Florencia, Caquetá</p>
            <p>Universidad de la Amazonia</p>
            <div className="social-icons">
              <span className="social-icon">🌐</span>
              <span className="social-icon">🐙</span>
              <span className="social-icon">🐦</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} UniCode. Todos los derechos reservados.</p>
          <div className="footer-status">
            <span className="status-indicator"></span> System Online
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;