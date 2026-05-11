import React from 'react';

const UserSettings = () => {
  return (
    <div className="tab-view">
      <h2 style={{ color: 'var(--primary-dark)', marginBottom: '20px' }}>Configuración de la cuenta</h2>
      <form style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Cambiar Contraseña</label>
          <input type="password" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <button type="button" style={{ padding: '10px 20px', background: 'var(--primary-blue)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default UserSettings;