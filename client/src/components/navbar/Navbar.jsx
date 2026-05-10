import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="navbar">
      {/* Top bar with logo and user section */}
      <div className="navbar-top">
        <div className="navbar-container">
          <div className="navbar-logo">
            <div className="logo-icon">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
            </div>
            <div className="logo-text">
              <span className="logo-main">UNICODE</span>
              <span className="logo-subtitle">Sponsored by Amazonina</span>
            </div>
          </div>

          <div className="navbar-right">
            <div className="navbar-notifications">
              <button className="notification-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
            </div>
            
            <div className="navbar-lang">
              <button className="lang-btn">
                <span className="flag">ES</span>
              </button>
              <button className="lang-btn">
                <span className="flag">EN</span>
              </button>
            </div>

            <div className="navbar-user">
              <span className="username">Jeank__</span>
              <span className="separator">|</span>
              <a href="#logout" className="logout-link">Logout</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation menu */}
      <div className="navbar-bottom">
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li><a href="#home" className="nav-link active">HOME</a></li>                        
            <li><a href="#contests" className="nav-link">CONTESTS</a></li>            
            <li><a href="#problemset" className="nav-link">PROBLEMSET</a></li>
            <li><a href="#groups" className="nav-link">GROUPS</a></li>
          </ul>

          <div className="navbar-search">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;