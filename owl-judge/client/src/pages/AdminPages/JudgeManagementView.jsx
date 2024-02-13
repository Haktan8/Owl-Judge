import React, { useState, useEffect } from 'react';
import AddJudges from '../AddJudges'; // Adjust the import path as necessary
import './JudgeManagementView.css';

const JudgeManagementView = () => {
  const [judges, setJudges] = useState([]);
  const [showAddJudge, setShowAddJudge] = useState(false);

  useEffect(() => {
    // Fetch judges data
  }, []);

  // Placeholder function for updating the list after adding a judge
  const handleAddJudge = (newJudge) => {
    setJudges(prev => [...prev, newJudge]);
    setShowAddJudge(false); // Close the AddJudge view/modal after adding
  };

  return (
    <div className="judge-management">
      <h1>Judge Management</h1>
      <button className='add-judge-btn' onClick={() => setShowAddJudge(true)}>Add Judge</button>
      {showAddJudge && <AddJudges onAddJudge={handleAddJudge} />}
      <table>
      <thead>
        <tr>
          <th>JudgeID</th>
          <th>Name</th>
          <th>LastName</th>
          <th>Assigned</th>
          <th>Project Assigned To</th>
          <th>Actions</th> {/* For edit/delete actions if needed */}
        </tr>
      </thead>
      <tbody>
        {judges.map(judge => (
          <tr key={judge.JudgeID}>
            <td>{judge.JudgeID}</td>
            <td>{judge.Name}</td>
            <td>{judge.LastName}</td>
            <td>{judge.assigned ? 'Yes' : 'No'}</td>
            <td>{judge.projectAssignedTo || 'N/A'}</td>
            <td>
              {/* Placeholder for Edit/Delete buttons */}
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      
      {/* Dynamic table will be added here */}
    </div>
  );
};

export default JudgeManagementView;
