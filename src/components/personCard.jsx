import { NavLink } from "react-router-dom";

export default function PersonCard({ name, image }) {
  return (
    <div className="person__item">
      <NavLink to={`./${getIdFromUrl(image)}`}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
            image
          )}.jpg`}
          alt=""
        />

        <h2 className="person__name">{name}</h2>
      </NavLink>
    </div>
  );
}

export function getIdFromUrl(url) {
  const match = url.match(/\d+/);
  return parseInt(match[0], 10);
}
