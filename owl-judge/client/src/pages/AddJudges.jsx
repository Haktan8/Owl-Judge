import { useState } from "react";
import './AddJudges.css';

const AddJudges = () => {
  const [judgeName, setJudgeName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [preference, setPreference] = useState('')
  const [searchedJudge, setSearchedJudge] = useState('')
  const [addError, setAddError] = useState('')
  const [searchError, setSearchError] = useState('')

  const addJudge = () => {
    //Checks if any inputs are empty. If so = true
    const emptyInput = [judgeName, companyName, preference].some(value => value === '');
    if (emptyInput){
      setAddError('One or more of your inputs are blank.')
    }
    else{
      setAddError('')
      //Post request
    }
  }

  const searchJudges = () => {
    //Checks if some input has been given
    if (searchedJudge !== ''){
      setSearchError('')
      //Get request to display judges
    }
    else{
      setSearchError('No text given')
    }
  }

  return (  
    <div className="add-judge-container">
      <div className="add-judge-manual">
        <h2>Add Judge Manually</h2>
        <input placeholder="Judge's Name" onChange={
          (e) => setJudgeName(e.target.value)
        } /><br />
        <input placeholder="Company Name" onChange={
          (e) => setCompanyName(e.target.value)
        } /><br />
        {/* Drop down that sets preference value to option value on change */}
        <select value={preference} onChange={
          (e) => setPreference(e.target.value)
        }>
          <option value="">Select a preference</option>
          <option value="Pref 1">Preference 1</option>
          <option value="Pref 2">Preference 2</option>
          <option value="Pref 3">Preference 3</option>
        </select><br />
        <p>{addError}</p>
        <button onClick={addJudge}>
          Add Judge
        </button>
      </div>
      <div className="add-judge-csv">
        <h2>Import Judges</h2>
        {/* Gets csv file */}
        <input type="file" id="csvFile" accept=".csv" />
      </div>
      <div className="set-judge-threshold">
        <h2>Set Judging Threshold</h2>
        <input placeholder="Search for judge" onChange={
          (e) => setSearchedJudge(e.target.value)
        } /> <br />
        <p>{searchError}</p>
        <button onClick={searchJudges}>
          Search
        </button> <br />
        <input placeholder="Threshold number" type="number" />
      </div>
    </div>
  );
}
 
export default AddJudges;