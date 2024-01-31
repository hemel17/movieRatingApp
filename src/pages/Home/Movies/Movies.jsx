import { useLoaderData } from "react-router-dom";

const Movies = () => {
  const moviesData = useLoaderData();
  const movies = moviesData.data.results;
  console.log(movies);
  return (
    <>
      <h2 className="text-2xl md:text-3xl text-center mt-6 mb-10">
        Check out the most popular movies!!!
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="card card-compact bg-base-100 shadow-xl mx-auto border-2 w-4/5 md:w-full"
          >
            <figure className="h-96 w-full">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie poster"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p>{movie.overview.slice(0, 350) + '...'}</p>
              <div className="card-actions">
                <button className="btn btn-primary w-full">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Movies;
