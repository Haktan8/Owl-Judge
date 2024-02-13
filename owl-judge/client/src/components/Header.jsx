import React from 'react';
import './Header.css';
import { auth } from '../index';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">OWL JUDGE</div>
        <div className="header-signout">
          <button onClick={() => { auth.signOut() }}>Sign Out</button>
        </div>
      </div>
    </header>
  );
};




export default Header;
