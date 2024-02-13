import React, { useState, useEffect } from 'react';
import AddScoring from '../AddScoring'; // Assuming you have or will create this component
import './ScoringView.css'; // Make sure to create and import your CSS file for styling

const ScoringView = () => {
  const [scoringCriteria, setScoringCriteria] = useState([]);
  const [showAddScoring, setShowAddScoring] = useState(false);

  useEffect(() => {
    // Placeholder for fetching scoring criteria from your backend
  }, []);

  const handleAddScoringCriteria = (newCriteria) => {
    setScoringCriteria(prev => [...prev, newCriteria]);
    setShowAddScoring(false); // Close the AddScoring view/modal after adding
  };

  return (
    <div className="scoring-view">
      <h1>Scoring Management</h1>
      <button onClick={() => setShowAddScoring(true)}>Add Scoring Criteria</button>
      {showAddScoring && <AddScoring onAddScoringCriteria={handleAddScoringCriteria} />}
      
      {/* Placeholder for scoring criteria listing */}
      <div className="scoring-criteria-list">
        {scoringCriteria.length > 0 ? (
          scoringCriteria.map(criteria => (
            <div key={criteria.id} className="criteria-item">
              <p>{criteria.name}: {criteria.description}</p>
            </div>
          ))
        ) : (
          <p>No scoring criteria found. Add new scoring criteria to get started!</p>
        )}
      </div>
    </div>
  );
};

export default ScoringView;
