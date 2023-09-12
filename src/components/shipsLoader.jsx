export const shipsLoader = async () => {
  let ships = [];
  let count;
  for (let i = 1; i < 5; i++) {
    await fetch(`https://swapi.dev/api/starships/?page=${i}`)
      .then((res) => res.json())
      .then((data) => {
        ships.push(...data.results);
        count = data.count;
      });
  }
  console.log(`ships from loader`, ships);
  return { ships, count };
};
