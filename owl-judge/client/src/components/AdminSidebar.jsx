import React, { useState } from 'react';
import './AdminSidebar.css'; // Adjust the path as needed

const Sidebar = ({ onMenuClick, isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
      <button onClick={toggleSidebar}>{isOpen ? '<' : '>'}</button>
      <div className="sidebar-content">
        {isOpen && (
          <div>
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
        )}
      </div>
    </div>
  );
};

export default Sidebar;