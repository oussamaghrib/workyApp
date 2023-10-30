import React, { useState, useEffect, useRef } from "react";
import { getExercises } from "../services/exercises";
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
      {exercises.map((exercise, i) => (
        <div key={i}>
          <h3>{exercise.name}</h3>
          <p>{exercise.muscles}</p>
        </div>
      ))}

      <button onClick={handleLoadMore} ref={buttonRef}>Load More</button>
    </>
  );
}
export default Exercises;
