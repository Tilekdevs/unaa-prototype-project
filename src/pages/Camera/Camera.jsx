import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./camera.scss";

const StreamImageCard = ({ streamImage }) => (
  <div className="video">
    <div className="video__content">
      {streamImage && (
        <img
          id="streamImage"
          className="img-rounded"
          style={{ maxWidth: "100%" }}
          src={streamImage}
          alt="Stream"
        />
      )}
    </div>
  </div>
);

const StreamTableCard = ({ streams, changeStreamImage }) => (
  <div className="camera__title">
    <div className="camera__title-container">
      {streams.map((stream) => (
        <div key={stream.id} className="camera__title-block">
          <img src={stream.image} alt="" className="camera__title-img" />
          <p onClick={() => changeStreamImage(stream.id)} className="camera__title-subtitle">{stream.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const Camera = () => {
  const [streams, setStreams] = useState([]);
  const [currentStreamId, setCurrentStreamId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/streams/");
        setStreams(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const changeStreamImage = useCallback((id) => setCurrentStreamId(id), [setCurrentStreamId]);

  const currentStream = streams.find(stream => stream.id === currentStreamId);
  const streamImage = currentStream ? `http://127.0.0.1:8000/api/streams/${currentStreamId}` : null;

  return (
    <div className="camera">
      <div className="camera__container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <StreamImageCard streamImage={streamImage} />
            <StreamTableCard
              streams={streams}
              changeStreamImage={changeStreamImage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Camera;
