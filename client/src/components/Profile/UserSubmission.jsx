import React from 'react';

const UserSubmissions = () => {
  return (
    <div className="tab-view">
      <h2 style={{ color: 'var(--primary-dark)', marginBottom: '20px' }}>Historial de Envíos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th style={{ padding: '10px' }}>Problema</th>
            <th style={{ padding: '10px' }}>Lenguaje</th>
            <th style={{ padding: '10px' }}>Veredicto</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '10px' }}>#1024</td>
            <td style={{ padding: '10px', color: 'var(--primary-blue)' }}>A. Watermelon</td>
            <td style={{ padding: '10px' }}>GNU C++20</td>
            <td style={{ padding: '10px', color: 'var(--success-green)', fontWeight: 'bold' }}>Accepted</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserSubmissions;