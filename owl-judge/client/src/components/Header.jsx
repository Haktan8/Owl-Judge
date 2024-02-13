import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">OWL JUDGE</div>
        <div className="header-signout">
          <button onClick={() => {/* handle sign out logic here */}}>Sign Out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
