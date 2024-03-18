import React, { useState } from 'react';
import './Sidebar.css'; // Adjust the path as needed

const Sidebar = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

  const toggleSidebar = () => setIsOpen(!isOpen); // Function to toggle sidebar

  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
      {/* Positioning the toggle button at the top */}
      <button onClick={toggleSidebar}>{isOpen ? '<' : '>'}</button>

      {/* Everything below the button gets pushed lower due to padding-top */}
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