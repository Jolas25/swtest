import { useEffect, useState, Suspense } from "react";
import { Await } from "react-router-dom";

import Panel from "./panel";

export default function Homeworld({ urlPlanet }) {
  const [planet, setPlanet] = useState(null);
  // const [onShow, setOnShow] = useState(false);

  useEffect(() => {
    fetch(urlPlanet)
      .then((res) => res.json())
      .then((homeworld) => {
        console.log(`homeworld `, homeworld);
        setPlanet(homeworld);
      });
  }, [urlPlanet]);

  // console.log(`planet: `, planet);
  return (
    <div className="person__homeworld">
      <Panel props={planet} />
      {/* Planet: {planet.name} <span onClick={() => setOnShow(!onShow) } onShow={onShow}>&#8681;</span> */}
    </div>
  );
}
