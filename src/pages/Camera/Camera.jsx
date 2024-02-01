import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@mui/material';
import './camera.scss';

const StreamImageCard = ({ currentStreamId }) => (
  <div className='video'>
    <div className='video__content'>
      {currentStreamId && (
        <img
          id="streamImage"
          className="img-rounded"
          style={{ maxWidth: '100%' }}
          src={`http://127.0.0.1:8000/api/streams/${currentStreamId}`}
          alt="Stream"
        />
      )}
    </div>
  </div>
);

// const StreamTableCard = ({ streams, changeStreamImage }) => (
//   <div className='camera__title'>
//     <div className='camera__title-block'>
//       {streams.map((stream) => (
//         <ul key={stream.id} className="camera__title-list">
//           <li className="camera__title-item" onClick={() => changeStreamImage(stream.id)}>
//             {stream.title}
//           </li>
//         </ul>
//       ))}
//     </div>
//   </div>
// );


const StreamTableCard = ({ streams, changeStreamImage }) => (
  <div className='camera__title'>
    <div className='camera__title-block'>
      {Array.from({ length: 30 }, (_, index) => (
        <ul key={index} className="camera__title-list">
          <li className="camera__title-item" onClick={() => changeStreamImage(index + 1)}>
            Stream {index + 1}
          </li>
        </ul>
      ))}
    </div>
  </div>
);


const Camera = () => {
  const [streams, setStreams] = useState([]);
  const [currentStreamId, setCurrentStreamId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/streams/`);
        setStreams(response.data);
        setCurrentStreamId(response.data.length > 0 ? response.data[0].id : null);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const changeStreamImage = async (streamId) => {
    try {
      await axios.get(`http://127.0.0.1:8000/api/streams/${streamId}`);
      setCurrentStreamId(streamId);
    } catch (error) {
      console.error('Error fetching stream:', error.message);
    }
  };

  return (
    <div className='camera'>
      <div className="camera__container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <StreamImageCard currentStreamId={currentStreamId} />
            <StreamTableCard streams={streams} changeStreamImage={changeStreamImage} />
          </>
        )}
      </div>
    </div>
  );
};

export default Camera;
