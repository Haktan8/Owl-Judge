import { useState, useEffect } from "react";

const CreateEvent = () => {
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endDate, setEndDate] = useState('')
  const [endTime, setEndTime] = useState('')
  const [inputError, setInputError] = useState('')
  const currentDate = new Date();

  //Gets yesterday's date so it can not be selected as a start date
  const currentDateMin = () => {
    currentDate.setDate(currentDate.getDate());
    return currentDate.toISOString().split('T')[0];
  }
  //If start date is changed and becomes greater than end date, will make end date = start date
  const checkDate = (testDate) => {
    if (startDate > endDate){
      setEndDate(testDate)
    }
  }
  //Ensures startDate has been changed before setting end date
  useEffect(() => {
    checkDate(startDate);
  }, [startDate]);

  const postCreateEvent = () => {
    const emptyInput = [title, startDate, startTime, endDate, endTime].some(value => value === '');
    if (emptyInput){
      setInputError('Not all inputs have been filled')
      //Post
    }
    else{
      setInputError('')
    }
  }

  return (  
    <div className="create-event-container">
      <h2>Create Event</h2>
      <input label="Title" onChange={(e) => {
        setTitle(e.target.value)
      }} /> <br />
      <input label="Start Date" type="date" min={currentDateMin()} onChange={
        (e) => setStartDate(e.target.value)
      } /> <br />
      <input label="Start Time" type="time" onChange={
        (e) => setStartTime(e.target.value)
      } /> <br />
      {/* Sets min date to the start date so end date can not be before start date */}
      <input label="End Date" type="date" value={endDate} min={startDate} onChange={
        (e) => setEndDate(e.target.value)
      }/> <br />
      <input label="End Time" type="time" onChange={
        (e) => setEndTime(e.target.value)
      }/> <br />
      <button onClick={postCreateEvent}>Add Event</button> <br />
      <p>{inputError}</p>
      <p>Image map:</p>
    </div>
  );
}
 
export default CreateEvent;