import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import "./camera.scss";

const StreamImageCard = ({ currentStreamId }) => (
  <div className="video">
    <div className="video__content">
      {currentStreamId && (
        <img
          id="streamImage"
          className="img-rounded"
          style={{ maxWidth: "100%" }}
          src={`http://127.0.0.1:8000/api/streams/${currentStreamId}`}
          alt="Stream"
        />
      )}
    </div>
  </div>
);

const StreamTableCard = ({ streams, changeStreamImage, currentStreamId }) => (
  <div className="camera__title">
    <div className="camera__title-container">
      {streams.map((stream) => (
        <div key={stream.id} className="camera__title-block">
          <img src={`http://127.0.0.1:8000/api/streams/${currentStreamId}`} alt="" className="camera__title-img" />
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

  useEffect(() => {
    const fetchStreamImage = async () => {
      if (currentStreamId !== null) {
        try {
          setLoading(true);
          await axios.get(
            `http://127.0.0.1:8000/api/streams/${currentStreamId}`
          );
        } catch (error) {
          console.error("Error fetching stream:", error.message);
        } finally {
          setLoading(false);
        }
      }
    };
 
    fetchStreamImage();
  }, [currentStreamId]);

  const memoizedStreams = useMemo(() => streams, [streams]);
  const memoizedLoading = useMemo(() => loading, [loading]);
  const changeStreamImage = useCallback((id) => setCurrentStreamId(id), []);

  return (
    <div className="camera">
      <div className="camera__container">
        {memoizedLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <StreamImageCard currentStreamId={currentStreamId} />
            <StreamTableCard
              streams={memoizedStreams}
              changeStreamImage={changeStreamImage}
              currentStreamId={currentStreamId}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Camera;
