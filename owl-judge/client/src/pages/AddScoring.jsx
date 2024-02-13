import React, { useState } from 'react';
import './AddScoring.css'; 

const AddScoring = ({ onAddScoringCriteria }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (!name || !description || !weight) {
      alert('Please fill in all fields');
      return;
    }

    // Assuming `onAddScoringCriteria` is a function passed from the parent that handles the actual addition
    onAddScoringCriteria({ name, description, weight });
    setName('');
    setDescription('');
    setWeight('');
  };

  return (
    <form className="add-scoring-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Criterion Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button type="submit">Add Scoring Criterion</button>
    </form>
  );
};

export default AddScoring;
