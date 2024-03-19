import React, { useState } from 'react';
import CreateEvent from '../CreateEvent'; 
import './JudgeEventManagement.css';

const EventManagementView = () => {
  const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);

  return (
    <div className="event-management">
      <div className="page-header">
        <h1>Event Management</h1>
        <button className="add-event-btn" onClick={() => setIsCreateEventVisible(true)}>Add Event</button>
        {isCreateEventVisible && <CreateEvent onClose={() => setIsCreateEventVisible(false)} />}
      {/* Rest of the component */}
      </div>
      <div className="statistic">
          <h2>Total Events</h2>
          <p>Number</p>
          {/* Replace "Number" with dynamic data fetched from your backend */}
        </div>
        <div className="statistic">
          <h2>Current Events</h2>
          <p>Number</p>
          {/* Replace "Number" with dynamic data */}
        </div>
        <div className="statistic">
          <h2>Past Events</h2>
          <p>Number</p>
          {/* Replace "Number" with dynamic data */}
        </div>
        <div className="statistic">
          <h2>Future Events</h2>
          <p>Details</p>
          {/* Replace "Details" with dynamic data or a link to view more */}
        </div>
    </div>
  );
};

export default EventManagementView;
