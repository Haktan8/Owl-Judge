import React, { useState } from 'react';
import './SettingsView.css'; 
const SettingsView = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleSaveSettings = (e) => {
    e.preventDefault();
    alert('Settings saved!');
  };

  return (
    <div className="settings-view">
      <h1>Settings</h1>
      <form onSubmit={handleSaveSettings}>
        <div className="setting-item">
          <label htmlFor="emailNotifications">Email Notifications</label>
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="theme">Theme</label>
          <select id="theme" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default SettingsView;
