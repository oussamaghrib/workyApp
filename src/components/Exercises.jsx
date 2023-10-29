import React, { useState } from 'react';

function Exercises() {

    const [exercises, setExercises] = useState([]);
    const [offset, setOffset] = useState(0);

    async function fetchExercises() {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?offset=${offset}`, {
            headers: {
                'X-Api-Key': import.meta.env.VITE_EXERCISES_NINJA_API_KEY
            }
        });
        const data = await response.json();
        return data
    }

    async function handleLoadMore() {
        await fetchExercises();
        setOffset(prev => prev + 10);
        const exercises = await fetchExercises()

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


