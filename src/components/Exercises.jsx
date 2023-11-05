import React, { useState, useEffect, useRef } from "react";
import ExerciseCard from "./ExerciseCard";
import { getExercises } from "../services/exercises";
import { Box } from "@mui/material";
import SelectedExercises from "./SelectedExercises";
import { ExercisesContext } from '../contexts/exercisesContext';
import WorkoutBuilder from "./WorkoutBuilder";


function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState([]);
  
  useEffect(() => {
    const storedSelected = JSON.parse(localStorage.getItem('selectedExercises'));
    if (storedSelected && storedSelected.length > 0) {
      setSelected(storedSelected);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedExercises', JSON.stringify(selected));
  }, [selected]);



 
  const buttonRef = useRef()

  function handleSelect(name) {
    
    if(!selected.includes(name)) {
      setSelected(prev => [...prev, name]);
    } 
    else {
      setSelected(prev => prev.filter(n => n !== name))
      

    }
    
  }


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleLoadMore()     }
    });

    observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, [exercises.length]);

  async function handleLoadMore() {
    setOffset((prev) => prev + 10);
    const exercises = await getExercises(offset);

    setExercises((prev) => [...prev, ...exercises]); // Update exercises state

    return exercises.length;
  }


  return (
    <> 
    <ExercisesContext.Provider value={{selected, setSelected}}>
      
    <WorkoutBuilder></WorkoutBuilder>
    <SelectedExercises selectedExercises={selected}></SelectedExercises>
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}>
      {exercises.map((exercise, i) => (
        <ExerciseCard exercise={exercise} key={i} onSelect={handleSelect}    />
       
      ))}
      </Box>

      <button onClick={handleLoadMore} ref={buttonRef}>Load More</button>
      </ExercisesContext.Provider>  
    </>
  );
}
export default Exercises;
