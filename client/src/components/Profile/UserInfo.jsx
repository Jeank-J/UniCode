import React from 'react';

const UserInfo = () => (
  <div className="profile-content">
    <div className="profile-info">
      <div className="user-header">
        <span className="rank-title pupil" style={{color: 'var(--success-green)', fontWeight: 'bold'}}>Pupil</span>
        <h1 className="profile-username" style={{color: 'var(--success-green)', margin: '5px 0'}}>Jeank__</h1>
        <p className="user-meta" style={{color: 'var(--text-gray)'}}>
          Jean, <span style={{textDecoration: 'underline'}}>Colombia</span> <br />
          From <span style={{textDecoration: 'underline'}}>Universidad de la Amazonia</span>
        </p>
      </div>

      <ul style={{listStyle: 'none', padding: 0, marginTop: '20px'}}>
        <li style={{marginBottom: '10px'}}>📈 Contest rating: <strong>1251</strong> <span style={{color: 'gray', fontSize: '12px'}}>(max. specialist, 1440)</span></li>
        <li style={{marginBottom: '10px'}}>⭐ Friend of: 32 users</li>
        <li style={{marginBottom: '10px'}}>🕒 Last visit: <span style={{color: 'var(--success-green)', fontWeight: 'bold'}}>online now</span></li>
      </ul>
    </div>

    <div className="profile-photo-column" style={{width: '200px'}}>
      <div style={{border: '1px solid var(--border-color)', padding: '10px', textAlign: 'center'}}>
        <img src="https://via.placeholder.com/200" alt="Profile" style={{width: '100%'}} />
        <div style={{marginTop: '10px', fontSize: '12px'}}>
          <a href="#change" style={{color: 'var(--primary-blue)'}}>Change photo</a>
        </div>
      </div>
    </div>
  </div>
);
export default UserInfo;