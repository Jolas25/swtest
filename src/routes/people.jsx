import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import PersonCard from "../components/personCard";
import Pagination from "../components/pagination";
import { useEffect } from "react";

export default function People() {
  const { count, results } = useLoaderData();
  const [persons, setPersons] = useState(results);
  const navigation = useNavigation();
  useEffect(() => {
    setPersons(results);
  }, [results]);

  let numberOfPages = Math.ceil(count / 10);
  let numbersOfPages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    numbersOfPages.push(i);
  }

  return (
    <>
      {navigation.state === "loading" ? (
        <div className="loader">
          Loading <div class="custom-loader"></div>
        </div>
      ) : (
        <>
          <div className="person__items">
            {persons.map((person, id) => (
              <PersonCard
                key={person.name}
                name={person.name}
                image={person.url}
                onClick={(elem) => console.log(elem)}
              />
            ))}
          </div>
          <ul className="pagination">
            {numbersOfPages.map((i) => (
              <Pagination key={i} to={`/people/${i}`}>
                {i}
              </Pagination>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
