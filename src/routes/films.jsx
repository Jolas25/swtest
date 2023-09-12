// import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";
import FilmCard from "./film";

export default function Films() {
  const [films, setFilms] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => setFilms(data.results));
  }, []);
  return (
    <div className="films__cards">
      {navigation.state === "loading" ? (
        <div className="loader">
          Loading <div class="custom-loader"></div>
        </div>
      ) : films.length < 1 ? (
        <div className="loader">
          Loading <div class="custom-loader"></div>
        </div>
      ) : (
        <>
          {films
            .sort((a, b) => a.episode_id - b.episode_id)
            .map((film) => (
              <FilmCard film={film} key={film.episode_id} />
            ))}
        </>
      )}
    </div>
  );
}
