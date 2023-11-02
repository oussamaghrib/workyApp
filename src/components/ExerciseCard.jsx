import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import RemoveIcon from '@mui/icons-material/Remove';

import ExerciseInstructionsModal from "./ExerciseInstructionsModal";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function ExerciseCard(props) {

  const [wasAdded, setWasAdded] = useState(false)

  useEffect(() => {
    const storedWasAdded = JSON.parse(localStorage.getItem(props.exercise.name));
    if (storedWasAdded) {
      setWasAdded(storedWasAdded);
    }

      
  }, []);

  useEffect(() => {
    localStorage.setItem(props.exercise.name, JSON.stringify(wasAdded));
  }, [wasAdded]);

  function handleClick() {
    if (!props.wasAdded) {
      props.onSelect(props.exercise.name);
      setWasAdded(prev => !prev)
    }
  }




  return (
    <Card
      sx={{
        color: "black",
        width: "30%",
        minWidth: "400px",
        mb: "2%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >{
        wasAdded ? (
          <RemoveIcon onClick={handleClick} sx={{
            color:"fifth.main"
          }}/>  
        ) : (
          <LibraryAddIcon onClick={handleClick} sx={{
            color:"seventh.main"
          }}/>
        )
      }
        
      </Box>
      <CardContent>
        <Typography variant="h5" sx={{ fontSize: "1.3rem" }} component="div">
          {props.exercise.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <Box>
            <Typography variant="body2">
              <Typography component="span" m="{1}" color="third.main">
                #{props.exercise.muscle}
              </Typography>
            </Typography>
            <Typography variant="body2">
              <Typography component="span" m="{1}" color="second.main">
                #{props.exercise.type}
              </Typography>
            </Typography>
          </Box>

          <ExerciseInstructionsModal
            instructions={props.exercise.instructions}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ExerciseCard;
