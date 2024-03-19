// import React, { useState, useEffect } from 'react';
// import './ScoringView.css'; // Ensure this CSS file exists and is styled appropriately

// // This component would handle the scoring for individual projects
// const ScoreInput = ({ criteria, onScoreChange, scores }) => {
//   return (
//     <div className="score-input">
//       <label htmlFor={`criteria-${criteria.id}`}>{criteria.name}:</label>
//       <input
//         type="number"
//         id={`criteria-${criteria.id}`}
//         name={`criteria-${criteria.id}`}
//         value={scores[criteria.id] || ''}
//         onChange={e => onScoreChange(criteria.id, e.target.value)}
//       />
//     </div>
//   );
// };

// const ScoringView = () => {
//   const [projects, setProjects] = useState([]); // State to hold the projects assigned to the judge
//   const [scores, setScores] = useState({}); // State to hold the scores

//   useEffect(() => {
//     // TODO: Fetch projects assigned to the judge from your backend
//     // setProjects(fetchedProjects);
//     // The fetchedProjects should be an array of project objects

//     // TODO: Fetch scoring criteria from your backend
//     // setScoringCriteria(fetchedCriteria);
//     // The fetchedCriteria should be an array of criteria objects
//   }, []);

//   const handleScoreChange = (criteriaId, score) => {
//     setScores(prevScores => ({
//       ...prevScores,
//       [criteriaId]: score
//     }));
//     // TODO: You might want to send the score to the backend as soon as it's changed
//     // or you could have a save button to submit all scores at once.
//   };

//   const submitScores = () => {
//     // TODO: Implement score submission logic
//     // Example: fetch('/api/submit-scores', { method: 'POST', body: JSON.stringify(scores) });
//   };

//   return (
//     <div className="scoring-view">
//       <h1>Scoring Projects</h1>
      
//       {/* List of projects */}
//       {projects.length > 0 ? projects.map(project => (
//         <div key={project.id} className="project-item">
//           <h2>{project.title}</h2>
//           {project.criteria.map(criteria => (
//             <ScoreInput
//               key={criteria.id}
//               criteria={criteria}
//               onScoreChange={handleScoreChange}
//               scores={scores}
//             />
//           ))}
//           <button onClick={submitScores}>Submit Scores</button>
//         </div>
//       )) : (
//         <p>No projects assigned. Please check back later or contact the administrator.</p>
//       )}
//     </div>
//   );
// };

// export default ScoringView;


import React, { useState } from 'react';
import './ScoringView.css'; // Make sure to create and import your CSS file for styling

// Mock data for demo purposes
const mockProjects = [
  { id: 'p1', title: 'Project Alpha', criteria: [{ id: 'c1', name: 'Creativity' }, { id: 'c2', name: 'Feasibility' }] },
  { id: 'p2', title: 'Project Beta', criteria: [{ id: 'c1', name: 'Creativity' }, { id: 'c3', name: 'Impact' }] },
];

const ScoringView = () => {
  // State to hold scores for demonstration
  const [scores, setScores] = useState({});

  const handleScoreChange = (projectId, criteriaId, value) => {
    const updatedScores = {
      ...scores,
      [projectId]: {
        ...scores[projectId],
        [criteriaId]: value
      }
    };
    setScores(updatedScores);
  };

  return (
    <div className="scoring-view">
      <h1>Scoring Projects</h1>
      
      {mockProjects.map(project => (
        <div key={project.id} className="project-item">
          <h2>{project.title}</h2>
          {project.criteria.map(criteria => (
            <div key={criteria.id} className="criteria-item">
              <label htmlFor={`score-${project.id}-${criteria.id}`}>{criteria.name}:</label>
              <input
                type="number"
                id={`score-${project.id}-${criteria.id}`}
                name={`score-${project.id}-${criteria.id}`}
                value={scores[project.id] && scores[project.id][criteria.id] ? scores[project.id][criteria.id] : ''}
                onChange={(e) => handleScoreChange(project.id, criteria.id, e.target.value)}
              />
            </div>
          ))}
          {/* The submit button is for show in the demo */}
          <button className='Scoring' onClick={() => alert('Scores submitted for ' + project.title)}>Submit Scores</button>
        </div>
      ))}
    </div>
  );
};

export default ScoringView;
