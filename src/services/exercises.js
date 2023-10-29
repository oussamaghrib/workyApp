export async function getExercises(offset) {
    const response = await fetch(`https://api.api-ninjas.com/v1/exercises?offset=${offset}`, {
      headers: {
        'X-Api-Key': import.meta.env.VITE_EXERCISES_NINJA_API_KEY
      }
    });
    return await response.json();
  }
  