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
          {/*  TODO: Implement current class to use with current page  */}
          <Link to="/" className="current">
            <li>PROFILE</li>
          </Link>
          <Link to="/config">
            <li>CONFIG</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
