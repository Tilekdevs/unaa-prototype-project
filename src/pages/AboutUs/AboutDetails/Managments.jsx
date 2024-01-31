import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../aboutUs.scss';

const Managments = () => {
  const [managementData, setManagementData] = useState([]);

  useEffect(() => {
    const fetchManagementData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/about/management');
        setManagementData(response.data);
      } catch (error) {
        console.error('Error fetching management data:', error);
      }
    };

    fetchManagementData();
  }, []);

  return (
    <div className='MainManagmentContainer'>
      {managementData.map((manager, index) => (
        <div className='card' key={index}>
          <div
            className='titleManagment'
            style={{
              backgroundImage:`url(http://127.0.0.1:8000${manager.avatar})`
						}}
          >
            <h2 className='title'>{manager.name}</h2>
          </div>
          <p>{manager.description}</p>
          {manager.avatar && <img src={manager.avatar} alt={`${manager.name}'s avatar`} />}
        </div>
      ))}
    </div>
  );
};

export default Managments;
