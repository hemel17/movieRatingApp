import axios from "axios";

export const movieLoader = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_MOVIE_API_KEY,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data; // Return the data to be used by the component
    })
    .catch(function (error) {
      throw error; // Propagate the error to be caught by the route handling logic
    });
};
