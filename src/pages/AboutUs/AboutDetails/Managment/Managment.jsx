import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Managment/managment.scss';

const Managment = () => {
  const [managementData, setManagementData] = useState([]);

  useEffect(() => {
    const fetchManagementData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/about/management');
        console.log('Response data:', response.data);
        setManagementData(response.data);
      } catch (error) {
        console.error('Error fetching management data:', error);
      }
    };

    fetchManagementData();
  }, []);

  return (
    <div className='managment'>
      <div className="managment__container">
        {managementData.map((item, index) => (
          <div key={index} className="managment__card">
            <img className='managment__img' src={item.image} alt={item.name} />
            <h3 className="managment__title">{item.name}</h3>
            <p className="managment__status">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Managment;
