import { configureStore } from "@reduxjs/toolkit";
//import { starwarsSlice } from "./slices/starwars/starwarsSlice";
import { starwarsApi } from "../api/starwarsApi";

export const store = configureStore({
  reducer: {
    [starwarsApi.reducerPath]: starwarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starwarsApi.middleware),
});
