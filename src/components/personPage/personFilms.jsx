import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PersonFilms({ arrUrls }) {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await Promise.all(
          arrUrls.map((url) => fetch(url).then((response) => response.json()))
        );
        setFilms(movies);
        setIsLoading(false);
      } catch (error) {
        console.error("Произошла ошибка:", error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [arrUrls]);
  console.log(films);
  if (isLoading) {
    return (
      <div>
        Films: Loading...<div class="custom-loader"></div>
      </div>
    );
  }

  return (
    <div>
      <div>
        Films:
        <ul>
          {films
            .sort((a, b) => a.episode_id - b.episode_id)
            .map((movie, index) => (
              <li key={index}>
                {movie.episode_id}){" "}
                <Link
                  style={{ color: "rgb(42, 191, 196)" }}
                  to={`/films/${movie.episode_id}`}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
