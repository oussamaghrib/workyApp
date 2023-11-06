import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  position: "relative"
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
      <Button onClick={handleOpen}>the selected exercises</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       
        <Box sx={style}>
        
        {props.selectedExercises.map((selectedExercise, index) => {
            return (
              <Box key={index}> 
                <Typography id="modal-modal-description" sx={{ mt: 2, mb:2 }}> {selectedExercise}</Typography>
              </Box>
            )
            
        })
        }
        <Button sx= {{
          position: "absolute",
          bottom: "5px",
          right: "10px"
        }}>go build a workout</Button>
        </Box>
      </Modal>
    </div>
  );
}


export function getExercises() {
  return props.selectedExercises
}

   
export default SelectedExercises
