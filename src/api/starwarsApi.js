import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import axios from "axios";

export const starwarsApi = createApi({
  reducerPath: "starwarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.swapi.tech/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: (page = 1) => `people/?page=${page}&limit=10`,
      onError: () => {
        console.error("Error fetching Starwars api");
      },
    }),

    getPeopleId: builder.query({
      query: (peopleId) => `people/${peopleId}`,
    }),

    getSearchPeople: builder.query({
      query: (searchPeople) => `?search=${searchPeople}`,
    }),
  }),
});

export const {
  useGetPeopleQuery,
  useGetPeopleIdQuery,
  useGetSearchPeopleQuery,
} = starwarsApi;

/* axios.get(url).then((resp) => {
    setData(resp.data.results);
    console.log(resp.data.results);
  }); */
