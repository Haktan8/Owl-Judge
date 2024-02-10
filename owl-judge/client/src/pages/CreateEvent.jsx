import { useState } from "react";
import InputField from "../components/InputField";

const CreateEvent = () => {
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endDate, setEndDate] = useState('')
  const [endTime, setEndTime] = useState('')

  return (  
    <div className="create-event-container">
      <h1>Create Event</h1>
      <InputField label="Title" onChange={
        (e) => setTitle(e.target.value)
      }/>
      <InputField label="Start Date" type="date" onChange={
        (e) => setStartDate(e.target.value)
      }/>
      <InputField label="Start Time" type="time" onChange={
        (e) => setStartTime(e.target.value)
      }/>
      <InputField label="End Date" type="date" onChange={
        (e) => setEndDate(e.target.value)
      }/>
      <InputField label="End Time" type="time" onChange={
        (e) => setEndTime(e.target.value)
      }/>
      <button onClick={
        () => {
          //Replace with post request
          console.log({title}, {startDate}, {startTime}, {endDate}, {endTime})
        }
      }>Add Event</button>
    </div>
  );
}
 
export default CreateEvent;