import { useLoaderData, useParams } from "react-router-dom";

const Movie = () => {
  const { movieID } = useParams();
  const moviesData = useLoaderData();
  const movies = moviesData.data.results;
  const movie = movies.find((movie) => movie.id == movieID);
  console.log(movie);
  const {
    title,
    release_date,
    poster_path,
    overview,
    original_language,
    adult,
    popularity

  } = movie;
  return (
    <div className="mt-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-4/5 md:w-80 mx-auto">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="Album"
          />
        </figure>
        <div className="card-body w-4/5 md:w-96 ">
          <h2 className="card-title text-3xl md:text-4xl">{title}</h2>
          <p>Release Date : {release_date}</p>
          <p className="text-xl">{overview}</p>
          <p>Adult : {adult ? 'Yes' : 'No'}</p>
          <p>Language : {original_language}</p>
          <p>Popularity : {popularity}</p>
        </div>
      </div>
    </div>
  );
};
export default Movie;
