import { useState } from "react";
import { useEffect } from "react";
import { useNavigation, useParams } from "react-router-dom";

import { posters } from "../components/posters";
import Planet from "../components/filmPage/planet";
import CharactersInFilms from "../components/filmPage/charactersInFilms";

export default function FilmPage() {
  const { episodeId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await fetch(
          `https://swapi.dev/api/films/${
            episodeId < 4 ? +episodeId + 3 : +episodeId - 3
          }`
        ).then((response) => response.json());

        setFilmInfo(movie);
        setIsLoading(false);
      } catch (error) {
        console.error("Произошла ошибка:", error);
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [episodeId]);

  if (isLoading) {
    return (
      <div>
        Loading...<div class="custom-loader"></div>
      </div>
    );
  }

  return (
    <>
      {navigation.state === "loading" ? (
        <div className="loader">
          Loading <div class="custom-loader"></div>
        </div>
      ) : (
        <div className="film__page">
          <div className="film-page__poster-container">
            <img
              className="film-page__poster"
              src={posters[episodeId - 1]}
              alt="poster of the movie"
            />
          </div>
          <div className="film-page__info">
            <div className="film-page-info__opening-crawl">
              <p>{filmInfo.opening_crawl}</p>
            </div>
            <div className="film-page-info__other">
              <p>
                Episode: {filmInfo.episode_id} {filmInfo.title}{" "}
                {filmInfo.release_date}
              </p>
              <p>Director: {filmInfo.director}</p>
              <p>Producer: {filmInfo.producer}</p>
              <Planet arrUrls={filmInfo.planets} />
            </div>
          </div>
          <div className="film-page__characters">
            <CharactersInFilms arrUrls={filmInfo.characters} />
          </div>
        </div>
      )}
    </>
  );
}
