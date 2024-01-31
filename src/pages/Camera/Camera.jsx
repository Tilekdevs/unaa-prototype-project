  import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableRow, Container } from '@mui/material';
import ButtonAppBar from '../../components/ButtonAppBar/ButtonAppBar';
import axios from 'axios';

const StreamImageCard = ({ currentStreamId }) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '35px', width: '120vh' }}>
    {currentStreamId && (
      <CardContent>
        <img
          id="streamImage"
          className="img-rounded"
          style={{ maxWidth: '100%' }}
          src={`http://127.0.0.1:8000/api/streams/${currentStreamId}`}  
          alt="Stream"
        />
      </CardContent>
    )}
  </Card>
);

const StreamTableCard = ({ streams, changeStreamImage }) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '40%', mt: '35px', margin: '15px' }}>
    <Table>
      <TableBody>
        {streams.map((stream) => (
          <TableRow key={stream.id}>
            <TableCell>
              <Typography component="a" href="#" onClick={() => changeStreamImage(stream.id)}>
                {stream.title}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
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
  }, []); // Empty dependency array means this effect runs once on mount

  const changeStreamImage = async (streamId) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/stream/streams/${streamId}`);
      setCurrentStreamId(streamId);
    } catch (error) {
      console.error('Error fetching stream:', error.message);
    }
  }

  return (
    <div>
      <ButtonAppBar />
      <Container sx={{ display: 'flex' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
         
          <StreamImageCard currentStreamId={currentStreamId} />

     
          <StreamTableCard streams={streams} changeStreamImage={changeStreamImage} />
        </>
      )}
    </Container>
    </div>
  );
};

export default Camera;