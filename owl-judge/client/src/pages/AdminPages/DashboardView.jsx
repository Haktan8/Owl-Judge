import React from 'react';
import './DashboardView.css';
// Import any additional components or libraries you might need

const DashboardView = () => {
  return (
    <div className="dashboard-view">
      <h1>Welcome to the Admin Dashboard</h1>
      <div className="dashboard-statistics">
        <div className="statistic">
          <h2>Total Events</h2>
          <p>Number</p>
          {/* Replace "Number" with dynamic data fetched from your backend */}
        </div>
        <div className="statistic">
          <h2>Total Projects</h2>
          <p>Number</p>
          {/* Replace "Number" with dynamic data */}
        </div>
        <div className="statistic">
          <h2>Total Judges</h2>
          <p>Number</p>
          {/* Replace "Number" with dynamic data */}
        </div>
        <div className="statistic">
          <h2>Recent Scores</h2>
          <p>Details</p>
          {/* Replace "Details" with dynamic data or a link to view more */}
        </div>
      </div>
      <div className="dashboard-links">
        <h2>Quick Links</h2>
        <ul>
          <li>Manage Events</li>
          <li>Manage Projects</li>
          <li>Manage Judges</li>
          <li>View Scoring Overview</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardView;
