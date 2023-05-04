import React, { useState } from 'react';
import Chart from './chart';
import { useNavigate } from 'react-router-dom';
import { useLoads } from './LoadsContext'
import './styles.css';

const CarrierPage = () => {
  const navigate = useNavigate();
  const { selectedLoads, setSelectedLoads } = useLoads();
  const [selectedLoadIndex, setSelectedLoadIndex] = useState(null);

  const handleAdd = () => {
    navigate('/available-loads');
  };

  const handleDelete = () => {
    if (selectedLoadIndex !== null) {
      setSelectedLoads(selectedLoads.filter((_, index) => index !== selectedLoadIndex));
      setSelectedLoadIndex(null);
    }
  };

  const handleLoadClick = (index) => {
    setSelectedLoadIndex(index);
  };

  const handleSave = async () => {
    // Send the selected loads to the backend
    await fetch('/api/save-loads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ loads: selectedLoads }),
    });

    // Navigate to the 'profile' page
    navigate('/profile');
  };

  const noLoadsSelectedMessage = 'No Loads selected';

  return (
    <div className="container">
      <h1 className="title">Carrier Page</h1>
      <Chart title="Loads" />
      
      <div style={{ border: '1px solid', minHeight: '100px', padding: '10px' }}>
        {selectedLoads.length ? selectedLoads.map((load, index) => (
          <div
            key={index}
            className={selectedLoadIndex === index ? 'selected-load' : ''}
            onClick={() => handleLoadClick(index)}
          >
            {load}
          </div>
        )) : noLoadsSelectedMessage}
      </div>

      <div className="button-container">
        <button className="button" onClick={handleAdd}>Add</button>
        <button className="button" onClick={handleDelete}>Delete</button>
        <button className="button" onClick={handleSave}>Save</button>
      </div>

      <img
        src="https://clipground.com/images/18-wheeler-clip-art-free-16.jpg"
        alt="18-wheeler"
        className="truck-image"
      />
    </div>
  );
};

export default CarrierPage;
