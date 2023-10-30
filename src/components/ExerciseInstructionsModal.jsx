import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './exercise-instructions-modal.css'


export default function ExerciseInstructionsModal  (props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>instructions</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="main-modal" >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exercise Instructions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.instructions}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}