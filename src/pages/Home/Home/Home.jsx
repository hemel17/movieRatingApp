import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="mt-4 text-3xl text-center md:mt-8 md:text-5xl">
        Welcome to ShowHub!!!
      </h1>
      <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 text-center md md:flex-row md:mt-20">
        <div className="w-3/5 p-10 border-b-2 md:border-b-0 md:border-r-2">
          <h2 className="text-2xl md:text-3xl">Movies?</h2>
          <Link to="/movies" className="mt-2 btn btn-outline">
            Load Movies
          </Link>
        </div>
        <div className="w-3/5 p-10 border-t-2 md:border-t-0 md:border-l-2">
          <h2 className="text-2xl md:text-3xl">TV Series?</h2>
          <Link to="/tvseries" className="mt-2 btn btn-outline">
            Load TV Series
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
