import { useLoaderData, useNavigation } from "react-router-dom";
import { getIdFromUrl } from "./personCard";
import Homeworld from "./personPage/homeworld";
import { Suspense } from "react";
import PersonFilms from "./personPage/personFilms";

export default function PersonPage() {
  const person = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <div className="loader">
          Loading <div class="custom-loader"></div>
        </div>
      ) : (
        <div className="person__page">
          <div className="person__img">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
                person.url
              )}.jpg`}
              alt=""
            />
          </div>
          <div className="person__info">
            <div className="person__name">Name: {person.name}</div>
            <div className="person__gender">Gender: {person.gender}</div>
            <div>Birth year: {person.birth_year}</div>
            <div className="person__height">Height: {person.height}</div>
            <div className="person__hair-color">
              Hair color: {person.hair_color}
            </div>
            <div>Eye color: {person.eye_color}</div>
            <div>Mass: {person.mass}</div>
            <div>Skin color: {person.skin_color}</div>
            Homeworld:
            <Suspense fallback={<h1>Loading...</h1>}>
              <Homeworld urlPlanet={person.homeworld} />
            </Suspense>
            <PersonFilms arrUrls={person.films} />
          </div>
        </div>
      )}
    </>
  );
}
