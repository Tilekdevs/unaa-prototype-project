import React, { useState, useEffect } from 'react';
import axios from 'axios';

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/about/history');
        setHistoryData(response.data);
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <div style={{fontStyle: 'oblique'}}>
      <ul>
        {historyData.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
