import axios from "axios";

export const fetchMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const config = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGQxYzFlMDY2MjQzMzNlY2IzMzcxYWEwZTI2OGM3NCIsInN1YiI6IjY1YjkzZTMxMzM0NGM2MDEzMTkyMWZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Id1T2eFox8A0aoVW8awEmyTzZb1Grwux5L5j3meROE'
      }
    };
  
    try {
      const response = await axios.get(url, config);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };