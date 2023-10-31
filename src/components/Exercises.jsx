import React, { useState, useEffect, useRef } from "react";
import ExerciseCard from "./ExerciseCard";
import { getExercises } from "../services/exercises";
import { Box } from "@mui/material";



function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [offset, setOffset] = useState(0);
  let testConst = exercises.length;
  const buttonRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleLoadMore()     }
    });

    observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, [testConst]);

  async function handleLoadMore() {
    setOffset((prev) => prev + 10);
    const exercises = await getExercises(offset);

    setExercises((prev) => [...prev, ...exercises]); // Update exercises state

    return exercises.length;
  }
  const inputRef = useRef();
  const scrollHandler = () => {
    console.log(inputRef.current.getBoundingClientRect());
  };

  return (
    <>

    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}>
      {exercises.map((exercise, i) => (
        <ExerciseCard exercise={exercise} key={i}/ >
      ))}
      </Box>

      <button onClick={handleLoadMore} ref={buttonRef}>Load More</button>
    </>
  );
}
export default Exercises;
