import { Link } from "react-router-dom";

import { posters } from "../components/posters";
export default function FilmCard({ film }) {
  return (
    <div className="films__card">
      <img className="card__img" src={posters[film.episode_id - 1]} alt="" />
      <div className="card__info">
        <Link to={`./${film.episode_id}`}>
          <h2 className="card__title">{film.title}</h2>
        </Link>
        <p>episode {film.episode_id}</p>
        <p>{film.release_date}</p>
        <p>{film.director}</p>
      </div>
    </div>
  );
}
