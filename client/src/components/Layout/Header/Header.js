import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <div id="logo">
        <i className="fas fa-address-card" />
        <span> Naetirat</span>
      </div>
      <div id="menu">
        {/* <ul>
          <a href="#">
            <li>Menu</li>
          </a>
          <a href="#">
            <li>Menu</li>
          </a>
          <a href="#">
            <li>Menu</li>
          </a>
        </ul> */}
      </div>
    </nav>
  );
};

export default Header;
