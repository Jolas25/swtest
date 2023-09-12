import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../personCard";

export default function CharactersInFilms({ arrUrls }) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // throw new Error("Произошла ошибка загрузки данных");
        const listCharacters = await Promise.all(
          arrUrls.map((url) => fetch(url).then((response) => response.json()))
        );
        setCharacters([...listCharacters]);
        setIsLoading(false);
      } catch (error) {
        console.error("Произошла ошибка:", error);
        setIsLoading(false);
        setError(error);
      }
    };

    fetchCharacters();
  }, [arrUrls]);
  console.log(`characters `, characters);

  if (error) {
    return <div>Characters: Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <div>
        Characters: Loading...<div className="custom-loader"></div>
      </div>
    );
  }

  return (
    <>
      <p>Characters</p>
      <ul className="film-page__characters-list">
        {characters.length === 0
          ? "unknown"
          : characters.map((character, index) => (
              <li className="film-page__characters-listitem" key={index}>
                <Link to={`/people/*/${getIdFromUrl(character.url)}`}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
                      character.url
                    )}.jpg`}
                    alt=""
                  />

                  {character.name}
                </Link>
              </li>
            ))}
      </ul>
    </>
  );
}
