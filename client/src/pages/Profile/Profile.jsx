import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-card">
        {/* Pestañas superiores tipo Codeforces */}
        <div className="profile-tabs">
          <button className="tab active">JEANK__</button>
          <button className="tab">SETTINGS</button>
          <button className="tab">TEAMS</button>
          <button className="tab">SUBMISSIONS</button>
          <button className="tab">FAVOURITES</button>
        </div>

        <div className="profile-content">
          <div className="profile-info">
            <div className="user-header">
              <span className="rank-title pupil">Pupil</span>
              <h1 className="profile-username">Jeank__</h1>
              <p className="user-meta">
                Jean, <span className="country">Colombia</span> <br />
                From <span className="org">Universidad de la Amazonia</span>
              </p>
            </div>

            <ul className="stats-list">
              <li>
                <span className="icon">📈</span>
                Contest rating: <span className="rating-value">1251</span> 
                <span className="max-rating"> (max. specialist, 1440)</span>
              </li>
              <li>
                <span className="icon">⭐</span>
                Friend of: 32 users
              </li>
              <li>
                <span className="icon">📧</span>
                <span className="email">jeankjimenezortega@gmail.com</span>
                <span className="not-visible"> (not visible)</span>
              </li>
              <li>
                <span className="icon">🕒</span>
                Last visit: <span className="status-online">online now</span>
              </li>
              <li>
                <span className="icon">📅</span>
                Registered: 3 years ago
              </li>
            </ul>

            <div className="profile-actions">
              <a href="#blog" className="action-link">Blog entries (0)</a>, 
              <a href="#comments" className="action-link"> comments</a>
              <br />
              <a href="#write" className="action-link">Write new entry</a>
              <br />
              <a href="#talks" className="action-link">View my talks</a>
            </div>
          </div>

          <div className="profile-photo-column">
            <div className="photo-wrapper">
              <img 
                src="https://via.placeholder.com/250" 
                alt="Profile" 
                className="profile-img"
              />
              <div className="photo-footer">
                <a href="#change">Change photo</a> | <a href="#unset">Unset photo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;