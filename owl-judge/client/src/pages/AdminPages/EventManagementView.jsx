import React, { useState } from 'react';
import CreateEvent from '../CreateEvent'; 
import './EventManagementView.css';

const EventManagementView = () => {
  const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);

  return (
    <div className="event-management">
      <div className="page-header">
        <h1>Event Management</h1>
        <button className="add-event-btn" onClick={() => setIsCreateEventVisible(true)}>Add Event</button>
      </div>
      {isCreateEventVisible && <CreateEvent onClose={() => setIsCreateEventVisible(false)} />}
      {/* Rest of the component */}
    </div>
  );
};

export default EventManagementView;
