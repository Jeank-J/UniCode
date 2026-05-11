import React from 'react';
//import './ProfileNavbar.css';

const ProfileNavbar = ({ activeTab, onTabChange, username }) => {
  const tabs = [
    { id: 'profile', label: username },
    { id: 'settings', label: 'SETTINGS' },
    { id: 'teams', label: 'TEAMS' },
    { id: 'submissions', label: 'SUBMISSIONS' }
  ];

  return (
    <div className="profile-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
export default ProfileNavbar;