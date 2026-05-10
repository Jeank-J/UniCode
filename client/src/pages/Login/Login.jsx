import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo-icon">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <h2>Bienvenido de nuevo</h2>
          <p>Ingresa a tu cuenta de UniCode</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="ejemplo@correo.com" required />
          </div>
          
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="auth-btn-primary">Iniciar Sesión</button>
        </form>

        <div className="auth-footer">
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;