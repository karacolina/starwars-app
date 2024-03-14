import { starwarsApi } from "../../../api/starwarsApi";
//import { loading, setStarwars, setError } from "./starwarsSlice";

export const getStarwars = (page = 1) => {
  return async () => {
    const data = await starwarsApi.endpoints.getPeople({ page }).unwrap();
    console.log(data);
  };
};

export const getSearchStarwars = (searchPeople) => {
  return async () => {
    try {
      const { data } = await starwarsApi.endpoints.getSearchPeople.query(
        searchPeople
      );
      //dispatch(setStarwars({ starwars: data.results, page: 1 }));
    } catch (error) {
      //dispatch(setError("Error fetching StarWars data."));
      console.error("Error fetching Star Wars data:", error);
    }
  };
};
