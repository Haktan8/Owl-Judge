import React, { useState, useEffect } from 'react';
import AddProjects from '../AddProjects'; // Adjust the path as needed
import './ProjectManagementView.css'; // Make sure to create and import your CSS file for styling

const ProjectManagementView = () => {
  const [projects, setProjects] = useState([]);
  const [showAddProject, setShowAddProject] = useState(false);

  useEffect(() => {
    // Fetch projects data from your backend and set it using setProjects
  }, []);

  const handleAddProject = (newProject) => {
    setProjects(prev => [...prev, newProject]);
    setShowAddProject(false); // Close the AddProjects view/modal after adding
  };

  return (
    <div className="project-management">
      <h1>Project Management</h1>
      <button onClick={() => setShowAddProject(true)}>Add Project</button>
      {showAddProject && <AddProjects onAddProject={handleAddProject} />}
      
      {/* Placeholder for projects listing, replace with your implementation */}
      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map(project => (
            <div key={project.id} className="project-item">
              <p>{project.name}</p>
              {/* Additional project details */}
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
