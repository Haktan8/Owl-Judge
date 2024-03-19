import React, { useState } from 'react';
import './Admin.css';
import Sidebar from '../components/AdminSidebar';
import Header from '../components/Header';
import DashboardView from './AdminPages/DashboardView';
import EventManagementView from './AdminPages/EventManagementView';
import JudgeManagementView from './AdminPages/JudgeManagementView';
import ProjectManagementView from './AdminPages/ProjectManagementView';
import ScoringView from './AdminPages/ScoringView';
import SettingsView from './AdminPages/SettingsView';

const AdminDashboard = () => {
  const [view, setView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleMenuClick = (viewName) => {
    setView(viewName);
  };

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <DashboardView />;
      case 'EventManagement':
        return <EventManagementView />;
      case 'JudgeManagement':
        return <JudgeManagementView />;
      case 'ProjectManagement':
        return <ProjectManagementView />;
      case 'Scoring':
        return <ScoringView />;
      case 'Settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
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

export default AdminDashboard;
