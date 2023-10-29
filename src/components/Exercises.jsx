import React, { useState } from 'react';
import { getExercises } from '../services/exercises';
function Exercises() {

    const [exercises, setExercises] = useState([]);
    const [offset, setOffset] = useState(0);

    async function handleLoadMore() {
        setOffset(prev => prev + 10);
        const exercises = await getExercises(offset)

        setExercises(prev => [...prev, ...exercises]); // Update exercises state
    }

    return (
        <>


            {exercises.map((exercise, i) => (
                <div key={i}>
                    <h3>{exercise.name}</h3>
                    <p>{exercise.muscles}</p>
                </div>
            ))}

            <button onClick={handleLoadMore}>Load More</button>
        </>
    )
}
export default Exercises;


