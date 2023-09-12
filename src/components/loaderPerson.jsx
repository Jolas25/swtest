export default async function loaderPerson({ request, params }) {
  console.log({ request, params });
  let person;
  await fetch(`https://swapi.dev/api/people/${params.personId}`)
    .then((res) => res.json())
    .then((data) => {
      person = data;
    });
  return person;
}
