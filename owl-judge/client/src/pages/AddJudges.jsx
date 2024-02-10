import { useState } from "react";
import InputField from "../components/InputField";

const AddJudges = () => {
  const [judgeName, setJudgeName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [preference, setPreference] = useState('')

  return (  
    <div className="add-judge-container">
      <h1>Add Judge</h1>
      <input placeholder="Judge's Name" onChange={
        (e) => setJudgeName(e.target.value)
      }/><br />
      <input placeholder="Company Name" onChange={
        (e) => setCompanyName(e.target.value)
      }/><br />
      <select value={preference} onChange={
        (e) => setPreference(e.target.value)
      }>
        <option value="">Select a preference</option>
        <option value="Pref 1">Preference 1</option>
        <option value="Pref 2">Preference 2</option>
        <option value="Pref 3">Preference 3</option>
      </select><br />
      <button onClick={
        () => {
          //Replace with post request
          console.log({judgeName}, {companyName}, {preference})
        }
      }>Add Judge</button>
    </div>
  );
}
 
export default AddJudges;