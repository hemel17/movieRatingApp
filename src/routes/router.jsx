import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Rated from "../pages/Rated/Rated";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    {
      path: '/rated',
      element: <Rated></Rated>
    }
    ],
  },
]);
