import { useState } from 'react';
import './AddProjects.css';

const AddProjects = () => {
  const [projectNumber, setProjectNumber] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [topic, setTopic] = useState('')
  const [sponsoringCompany, setSponsoringCompany] = useState('')
  const [alertTime, setAlertTime] = useState('')
  const [addProjectError, setAddProjectError] = useState('')

  const addProject = () => {
    //Checks if any inputs are empty. If so = true
    const emptyInput = [projectNumber, title, category, topic, sponsoringCompany, alertTime].some(value => value === '');
    if (emptyInput){
      setAddProjectError('One or more of your inputs are blank.')
    }
    else{
      setAddProjectError('')
        //Post request
    }
  }
  

  return (  
    <div className="add-project-container">
      <div className="manually-add-project">
        <h2>Add Project Manually</h2>
        <input placeholder='Project Number' onChange={
          (e) => setProjectNumber(e.target.value)
        } /><br />
        <input placeholder='Title' onChange={
          (e) => setTitle(e.target.value)
        } /><br />
        <select value={category} onChange={
          (e) => setCategory(e.target.value)
        }>
          <option value="">Select a category</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select><br />
        <select value={topic} onChange={
          (e) => setTopic(e.target.value)
        }>
          <option value="">Select a topic</option>
          <option value="Topic 1">Topic 1</option>
          <option value="Topic 2">Topic 2</option>
          <option value="Topic 3">Topic 3</option>
        </select><br />
        <input placeholder='Sponsoring Company' onChange={
          (e) => setSponsoringCompany(e.target.value)
        } /><br />
        <input placeholder="Send ending project alert this many minutes before the project ends" type="number" onChange={
          (e) => setAlertTime(e.target.value)
        }/>
        <button onClick={addProject}>
          Add Project
        </button>
        <p>{addProjectError}</p>
      </div>
      <div className="import-project">
        <h2>Import Projects</h2>
        <input type="file" id="csvFile" accept=".csv" />
      </div>
    </div>
  );
}
 
export default AddProjects;