import { starwarsApi } from "../../../api/starwarsApi";
import { loading, setStarwars, setError } from "./starwarsSlice";

export const getStarwars = (page = 1) => {
  return async (dispatch) => {
    //se despacha el cargador
    dispatch(loading());

    const data = await starwarsApi.getPeople();
    console.log(data);

    dispatch(setStarwars({ starwars: data.results, page: page }));
  };
};

export const getSearchStarwars = (searchPeople) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      const { data } = await starwarsApi.endpoints.getSearchPeople.query(
        searchPeople
      );
      dispatch(setStarwars({ starwars: data.results, page: 1 }));
    } catch (error) {
      dispatch(setError("Error fetching StarWars data."));
      console.error("Error fetching Star Wars data:", error);
    }
  };
};
