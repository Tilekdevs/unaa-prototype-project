import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const CustomModal = ({ open, handleClose, results }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Search Results
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </Typography>
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
