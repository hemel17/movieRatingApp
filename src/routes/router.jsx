import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Movies from "../pages/Home/Movies/Movies";
import Movie from "../pages/Home/Movie/Movie";
import TvSeries from "../pages/Home/TvSeries/TvSeries";
import SingleTvSeries from "../pages/Home/SingleTvSeries/SingleTvSeries";
import Rated from "../pages/Rated/Rated/Rated";
import RatedMovies from "../pages/Rated/RatedMovies/RatedMovies";
import RatedTvSeries from "../pages/Rated/RatedTvSeries/RatedTvSeries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rated",
        element: <Rated></Rated>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
      {
        path: "/:movieID",
        element: <Movie></Movie>,
      },
      {
        path: "/tvseries",
        element: <TvSeries></TvSeries>,
      },
      {
        path: "/:tvseriesID",
        element: <SingleTvSeries></SingleTvSeries>,
      },
      {
        path: '/ratedmovies',
        element: <RatedMovies></RatedMovies>
      },
      {
        path: '/ratedtvseries',
        element: <RatedTvSeries></RatedTvSeries>
      }
    ],
  },
]);
