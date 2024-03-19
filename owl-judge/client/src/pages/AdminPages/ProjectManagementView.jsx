import React, { useState, useEffect } from 'react';
import AddProjects from '../AddProjects'; // Adjust the path as needed
import './ProjectManagementView.css'; // Ensure this CSS file exists and is styled appropriately

const ProjectManagementView = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddProject, setShowAddProject] = useState(false);

  useEffect(() => {
    // TODO: Fetch projects data from backend and set it using setProjects
    // Example: fetch('/api/projects').then(res => res.json()).then(data => setProjects(data));
  }, []);

  const handleAddProject = (newProject) => {
    setProjects(prev => [...prev, newProject]);
    setShowAddProject(false); // Close the AddProjects view/modal after adding
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    // TODO: Make a request to the backend to assign the judge to this project
    // Example: fetch('/api/request-assignment', { method: 'POST', body: JSON.stringify({ projectId }) });
  };

  return (
    <div className="project-management">
      <h1>Project Management</h1>
      <button onClick={() => setShowAddProject(true)}>Add Project</button>
      {showAddProject && <AddProjects onAddProject={handleAddProject} />}
      
      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map(project => (
            <div key={project.id} className="project-item">
              <p>{project.name}</p>
              {/* Replace the following with additional project details as needed */}
              <button onClick={() => handleProjectSelect(project.id)}>
                Request to Judge
              </button>
            </div>
          ))
        ) : (
          <p>No projects found. Add a new project to get started!</p>
        )}
      </div>
    </div>
  );
};

export default ProjectManagementView;
