import { useState, useEffect } from "react";
import Homeworld from "../personPage/homeworld";

export default function Planet({ arrUrls }) {
  const [listPlanet, setListPlanet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const planets = await Promise.all(
          arrUrls.map((url) => fetch(url).then((response) => response.json()))
        );
        setListPlanet(planets);
        setIsLoading(false);
      } catch (error) {
        console.error("Произошла ошибка:", error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [arrUrls]);
  console.log(listPlanet);
  if (isLoading) {
    return (
      <div>
        Loading...<div class="custom-loader"></div>
      </div>
    );
  }

  return (
    <div>
      Planets:
      {listPlanet.map((planet, index) => (
        <Homeworld key={index} urlPlanet={planet.url} />
      ))}
    </div>
  );
}
