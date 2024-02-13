import React, { useState, useEffect } from "react";
import './CreateEvent.css'; // Ensure you have this if you're styling your component
import { createEvent } from '../Firebase/Database';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [inputError, setInputError] = useState('');
  const currentDate = new Date();

  const currentDateMin = () => {
    currentDate.setDate(currentDate.getDate());
    return currentDate.toISOString().split('T')[0];
  };

  const checkDate = (testDate) => {
    if (startDate > endDate) {
      setEndDate(testDate);
    }
  };

  useEffect(() => {
    checkDate(startDate);
  }, [startDate]);

  const postCreateEvent = () => {
    const emptyInput = [title, startDate, startTime, endDate, endTime].some(value => value === '');
    if (emptyInput) {
      setInputError('Not all inputs have been filled');
      // Post logic here
    } else {
      createEvent(title, startDate, startTime, endDate, endTime);
      setInputError('');
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create Event</h2>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
      
      <label htmlFor="start-date">Start Date</label>
      <input id="start-date" type="date" min={currentDateMin()} value={startDate} onChange={(e) => setStartDate(e.target.value)} /><br />
      
      <label htmlFor="start-time">Start Time</label>
      <input id="start-time" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} /><br />
      
      <label htmlFor="end-date">End Date</label>
      <input id="end-date" type="date" value={endDate} min={startDate} onChange={(e) => setEndDate(e.target.value)} /><br />
      
      <label htmlFor="end-time">End Time</label>
      <input id="end-time" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} /><br />
      
      <button onClick={postCreateEvent}>Add Event</button><br />
      {inputError && <p className="error">{inputError}</p>}
    </div>
  );
};

export default CreateEvent;
