// import React, { useState, useEffect } from 'react';
// import './ProjectManagementView.css'; // Ensure this CSS file exists and is styled appropriately

// const ProjectManagementView = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     // TODO: Fetch projects data from backend and set it using setProjects
//     // Example: fetch('/api/projects').then(res => res.json()).then(data => setProjects(data));
//   }, []);

//   const handleProjectSelect = (projectId) => {
//     setSelectedProject(projectId);
//     // TODO: Make a request to the backend to notify admin of the judge's interest in this project
//     // Example: fetch('/api/request-assignment', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ projectId })
//     // });
//   };

//   return (
//     <div className="project-management">
//       <h1>Available Projects</h1>
      
//       <div className="projects-list">
//         {projects.length > 0 ? (
//           projects.map(project => (
//             <div key={project.id} className="project-item">
//               <p>{project.name}</p>
//               {/* Implement additional project details display as needed */}
//               <button onClick={() => handleProjectSelect(project.id)}>
//                 Request to Judge
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No available projects. Please check back later.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectManagementView;



import React, { useState } from 'react';
import './ProjectManagementView.css';

// Mock data for demonstration
const mockProjects = [
  { id: '1', name: 'Climate Change Awareness Campaign' },
  { id: '2', name: 'Community Clean-Up Initiative' },
  { id: '3', name: 'Renewable Energy Workshop' },
];

const ProjectManagementView = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    alert(`Request to judge project "${mockProjects.find(p => p.id === projectId).name}" sent.`);
  };

  return (
    <div className="project-management">
      <h1>Available Projects</h1>
      
      <div className="projects-list">
        {mockProjects.length > 0 ? (
          mockProjects.map(project => (
            <div key={project.id} className="project-item">
              <p>{project.name}</p>
              <button onClick={() => handleProjectSelect(project.id)}>
                Request to Judge
              </button>
            </div>
          ))
        ) : (
          <p>No available projects. Please check back later.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectManagementView;
