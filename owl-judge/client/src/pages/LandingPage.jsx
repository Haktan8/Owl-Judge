import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="header-text">Welcome to Owl Judge!</h1>

      <div className="image-container">
        <img
          src="/LandingLogo.png"
          alt="LandingLogo"
          className="center-image"
        />
      </div>
      <h2 className="header-text">Are you a(n)</h2>
      <div className="button-container">
        <button className="button-admin">Admin</button>
        <span className="or-text">or</span>
        <button className="button-judge">Judge</button>
      </div>
    </div>
  );
}

export default LandingPage;


