import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SelectedExercises = (props) => {
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
    return props.selectedExercises
}

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {props.selectedExercises.map((selectedExercise, index) => {
            return <Typography id="modal-modal-description" sx={{ mt: 2 }} key={index}> {selectedExercise}</Typography>
        })
        }
        </Box>
      </Modal>
    </div>
  );
}



   
export default SelectedExercises