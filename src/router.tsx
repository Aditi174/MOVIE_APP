import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import TVseries from "./pages/tv-series";
import BookMark from "./pages/bookmark";
import Error from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"} />,
    errorElement: <Error />,
  },

  {
    path: "home",
    element: <Home />,
    errorElement: <Error />,
  },

  {
    path: "movies",
    element: <Movies />,
    errorElement: <Error />,
  },

  {
    path: "tvseries",
    element: <TVseries />,
    errorElement: <Error />,
  },

  {
    path: "bookmarks",
    element: <BookMark />,
    errorElement: <Error />,
  },
]);
