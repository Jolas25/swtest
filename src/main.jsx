import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Index from "./routes";
import Films from "./routes/films";
import Root from "./routes/root.jsx";
import People from "./routes/people";
import Starships from "./routes/starships";
import loaderPeople from "./components/loader";
import loaderPerson from "./components/loaderPerson";
import PersonPage from "./components/personPage";
import FilmPage from "./routes/filmPage";
import { shipsLoader } from "./components/shipsLoader";
import ErrorPage from "./components/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    fallbackElement: (
      <div className="loader">
        Loading <div class="custom-loader"></div>
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "films",
        element: <Films />,
        children: [],
      },
      {
        path: "films/:episodeId",
        element: <FilmPage />,
      },
      {
        // path: "people/",
        index: true,
        element: <People />,
        // loader: loaderPeople,
      },
      {
        path: "people/:pageNumber?/",
        element: <People />,
        loader: loaderPeople,
      },
      {
        path: "/people?/:pageNumber?/:personId",
        element: <PersonPage />,
        loader: loaderPerson,
      },
      {
        path: "starships",
        element: <Starships />,
        loader: shipsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={
        <div className="loader">
          Loading <div class="custom-loader"></div>
        </div>
      }
    />
  </React.StrictMode>
);
