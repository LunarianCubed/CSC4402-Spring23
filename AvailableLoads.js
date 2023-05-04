import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoads } from './LoadsContext';
import './availableloadsstyle.css';
import {fetchLoads} from './backend';

const AvailableLoads = () => {
  const navigate = useNavigate();
  const [loads, setLoads] = useState([]);
  const [selectedLoads, setSelectedLoads] = useState([]);
  const { setSelectedLoads: setContextSelectedLoads } = useLoads();

  useEffect(() => {
    fetchLoads().then((data) => { // Use the fetchLoads function here
      if (data && data.length > 0) {
        const displayData = data.map((row) => `ID: ${row.id}, Origin: ${row.origin}, Destination: ${row.destination}`);
        setLoads(displayData);
      } else {
        setLoads(['No current loads available']);
      }
    });
  }, []);


  const fetchData = async () => {
    const data = await fetch('https://your-api-url.com/loads').then((response) => response.json());
    return data;
  };
  

  const handleLoadClick = (load) => {
    if (selectedLoads.includes(load)) {
      setSelectedLoads(selectedLoads.filter((selectedLoad) => selectedLoad !== load));
    } else {
      setSelectedLoads([...selectedLoads, load]);
    }
  };

  const handleSelect = () => {
    setContextSelectedLoads(selectedLoads);
    navigate('/home');
  };

  return (
    <div className="available-loads-container">
      <h1 className="available-loads-title">Available Loads</h1>
      <div>
        {loads.map((load, index) => (
          <div
            key={index}
            className={`load-item ${selectedLoads.includes(load) ? 'selected' : ''}`}
            onClick={() => handleLoadClick(load)}
          >
            {load}
          </div>
        ))}
      </div>
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={selectedLoads.join('\n')}
          onChange={() => {}}
        />
      </div>
      <button className="select-button" onClick={handleSelect}>
        Select
      </button>
    </div>
  );
};

export default AvailableLoads;
