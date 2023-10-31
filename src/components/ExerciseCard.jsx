import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ExerciseInstructionsModal from "./ExerciseInstructionsModal";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function ExerciseCard(props) {
  return (
    <Card
      sx={{
        bgcolor: "white",
        color: "black",
        width: "30%",
        minWidth: "400px",
        mb:"2%"
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontSize: "1.3rem" }} component="div">
          {props.exercise.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' , alignItems: 'center', width: '90%',}}>
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
