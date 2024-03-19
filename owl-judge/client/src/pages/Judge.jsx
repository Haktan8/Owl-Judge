import React, { useState } from 'react';
import './Judge.css';
import Sidebar from '../components/JudgeSidebar';
import Header from '../components/Header';
import JudgePanel from './JudgePages/JudgePanel';
import JudgeEventManagement from './JudgePages/JudgeEventManagement';
import ProjectManagementView from './JudgePages/ProjectManagementView';
import ScoringView from './JudgePages/ScoringView';
import SettingsView from './JudgePages/SettingsView';

const JudgeDashboard = () => {
  const [view, setView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleMenuClick = (viewName) => {
    setView(viewName);
  };

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <JudgePanel />;
      case 'EventManagement':
        return <JudgeEventManagement />;
      case 'ProjectManagement':
        return <ProjectManagementView />;
      case 'Scoring':
        return <ScoringView />;
      case 'Settings':
        return <SettingsView />;
      default:
        return <JudgePanel />;
    }
  };

  return (
    <div className="judge-dashboard">
      <Sidebar 
        onMenuClick={handleMenuClick} 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <Header />
      <div className="dashboard-content" style={{ marginLeft: isSidebarOpen ? '250px' : '50px' }}>
        {renderView()}
      </div>
    </div>
  );
};

export default JudgeDashboard;
