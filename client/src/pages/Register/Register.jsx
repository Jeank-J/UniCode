import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo-icon">
            <div className="bar bar1" style={{background: 'linear-gradient(135deg, #3498db, #2980b9)'}}></div>
            <div className="bar bar2" style={{background: 'linear-gradient(135deg, #e74c3c, #c0392b)'}}></div>
            <div className="bar bar3" style={{background: 'linear-gradient(135deg, #f39c12, #d68910)'}}></div>
          </div>
          <h2>Crea tu cuenta</h2>
          <p>Únete a la comunidad de UniCode</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label>Nombre Completo</label>
            <input type="text" placeholder="Juan Pérez" required />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="ejemplo@correo.com" required />
          </div>
          
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Mínimo 8 caracteres" required />
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="auth-btn-primary" style={{background: 'linear-gradient(135deg, #3498db, #2980b9)'}}>
            Registrarse
          </button>
        </form>

        <div className="auth-footer">
          <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;