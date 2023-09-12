import { useEffect, useState } from "react";

export default function Panel({ props }) {
  console.log(`props `, props);
  const [planetInfo, setPlanetInfo] = useState(props);
  const [onShow, setOnShow] = useState(false);
  useEffect(() => {
    console.log(`props `, props);
    setPlanetInfo(props);
    console.log(`пропсы изменились`, props);
  }, [props]);
  return (
    <>
      {planetInfo === null ? (
        <>
          <p>
            Loading <div class="custom-loader"></div>
          </p>
        </>
      ) : (
        <>
          <div>
            {planetInfo.name}
            <span className="panel__toggle" onClick={() => setOnShow(!onShow)}>
              {onShow ? "(close info)" : "(open info)"}
            </span>
          </div>
          {onShow && (
            <div className="person-homeworld__info">
              <p>name: {planetInfo.name}</p>
              <p>Climate: {planetInfo.climate}</p>
              <p>Diameter: {planetInfo.diameter}</p>
              <p>Terrain: {planetInfo.terrain}</p>
              <p>Orbital period: {planetInfo.orbital_period}</p>
              <p>Rotation period: {planetInfo.rotation_period}</p>
              <p>Population: {planetInfo.population}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
