import React, { useState } from 'react';
import ProfileNavbar from '../../components/profile/ProfileNavbar';
import UserInfo from '../../components/profile/UserInfo';
import UserSettings from '../../components/profile/UserSettings';
import UserSubmission from '../../components/profile/UserSubmission';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserInfo />;
      case 'settings':
        return <UserSettings />;
      case 'submissions':
        return <UserSubmission />;
      case 'teams':
      case 'favourites':
        return (
          <div className="tab-view">
            <h2 style={{ color: 'var(--text-gray)' }}>Sección en desarrollo</h2>
            <p>El contenido para {activeTab} estará disponible pronto.</p>
          </div>
        );
      default:
        return <UserInfo />;
    }
  };

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <ProfileNavbar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          username="JEANK__" 
        />

        <div className="profile-dynamic-body">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;