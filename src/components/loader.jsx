const loaderPeople = async ({ request, params }) => {
  let items;
  try {
    await fetch(
      `https://swapi.dev/api/people/?page=${
        params.pageNumber === undefined || params.pageNumber === null
          ? (params.pageNumber = "1")
          : params.pageNumber
      }`
    )
      .then((res) => res.json())
      .then((newItems) => {
        console.log(newItems);
        items = { ...newItems };
      });
  } catch (error) {
    throw new Error("", { status: error.status, statusText: "Not found" });
  }
  return items;
};

export default loaderPeople;
