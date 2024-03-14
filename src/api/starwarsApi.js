import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import axios from "axios";

export const starwarsApi = createApi({
  reducerPath: "starwarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.tech/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: (page = 1) => `people?page=${page}`,
      onError: () => {
        console.error("Error fetching Starwars api");
      },
    }),

    getCharacter: builder.query({
      query: (characterId) => `people/${characterId}`,
    }),

    getSearchCharacter: builder.query({
      query: (searchTerm) => `people/?search=${searchTerm}`,
    }),
  }),
});

export const {
  useGetPeopleQuery,
  useGetCharacterQuery,
  useGetSearchCharacterQuery,
} = starwarsApi;

/* axios.get(url).then((resp) => {
    setData(resp.data.results);
    console.log(resp.data.results);
  }); */
