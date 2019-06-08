import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <div id="logo">
        <i className="fas fa-address-card" />
        <span> Naetirat</span>
      </div>
      <div id="menu">
        <ul>
          <Link to="/">
            <li>Profile</li>
          </Link>
          <Link to="/config">
            <li>Config</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
