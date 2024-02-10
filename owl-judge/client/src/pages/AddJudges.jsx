import { useState } from "react";
import InputField from "../components/InputField";

const AddJudges = () => {
  const [judgeName, setJudgeName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [preference, setPreference] = useState('')

  return (  
    <div className="add-judge-container">
      <h1>Add Judge</h1>
      <nput placeholder="Judge's Name" onChange={
        (e) => setJudgeName(e.target.value)
      }/><br />
      <input placeholder="Company Name" onChange={
        (e) => setCompanyName(e.target.value)
      }/><br />
      <select value={preference} onChange={
        (e) => setPreference(e.target.value)
      }>
        <option value="Pref 1">Select an option</option>
        <option value="Pref 2">Option 1</option>
        <option value="Pref 3">Option 2</option>
        <option value="Pref 4">Option 3</option>
      </select><br />
      <button onClick={
        () => {
          //Insert push request
        }
      }>Add Judge</button>
    </div>
  );
}
 
export default AddJudges;