// src/components/Header.tsx
import React from 'react';
import './Header.css';
import userIcon from '../assets/anon2.jpeg'; // Import the image file
import githubImage from '../assets/github.svg'
import { WalletMultiButton } from '@demox-labs/aleo-wallet-adapter-reactui';

function Header() {
  return (
    <div className="header">
        <div style={{minWidth: "150px"}}>
            
        </div>
        <WalletMultiButton />
    <div className="header-right">
      <div className="dashboard-setting user-notification">
        <div className="dropdown">
          <a className="dropdown-toggle no-arrow" href="#" data-toggle="right-sidebar">
            <i className="dw dw-settings2"></i>
          </a>
        </div>
      </div>
      <div className="user-notification">
        <div className="dropdown">
          <a className="dropdown-toggle no-arrow" href="notification.php">
            <i className="icon-copy dw dw-notification"></i>
          </a>
        </div>
      </div>
      <div className="user-info-dropdown">
        <div className="dropdown">
          <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
            <span className="user-icon">
              <img src={userIcon} alt="User" />
            </span>
            <span className="user-name">Nomad123</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
            <a className="dropdown-item" href="#"><i className="dw dw-user1"></i> Profile</a>
            <a className="dropdown-item" href="#"><i className="dw dw-help"></i> Help</a>
          </div>
        </div>
      </div>
      <div className="github-link">
        <a href="https://github.com/Elexy101" target="_blank" rel="noopener noreferrer">
          <img src={githubImage} alt="GitHub" />
        </a>
      </div>
    </div>
  </div>  
  );
}

export default Header;
