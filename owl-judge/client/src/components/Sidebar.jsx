import React from 'react';
import './Sidebar.css'; // Adjust the path as needed


const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
      <li onClick={() => onMenuClick('Dashboard')}>Dashboard</li>
        <li onClick={() => onMenuClick('EventManagement')}>Event Management</li>
        <li onClick={() => onMenuClick('JudgeManagement')}>Judge Management</li>
        <li onClick={() => onMenuClick('ProjectManagement')}>Project Management</li>
        <li onClick={() => onMenuClick('Scoring')}>Scoring</li>
        <li onClick={() => onMenuClick('Settings')}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
