import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ExerciseInstructionsModal from "./ExerciseInstructionsModal";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './exercise-card.css'


function ExerciseCard(props) {
  return (
    <Card className="main-card-style">
      <CardContent>
        <Typography variant="h5" sx={{ fontSize: "1.3rem" }} component="div">
          {props.exercise.name}
        </Typography>

        <div className="tags">
        <Typography variant="body2">
          main muscle: <span className="hashtag muscle-tag">#{props.exercise.muscle}</span>
        </Typography>
        <Typography variant="body2">
          main muscle: <span className="hashtag exercise-type-tag">#{props.exercise.type}</span>
        </Typography>
        </div>
      </CardContent>
      <CardActions>
        <ExerciseInstructionsModal instructions = {props.exercise.instructions}/>
      </CardActions>
    </Card>

  );
}

export default ExerciseCard;
