import { createSlice } from "@reduxjs/toolkit";

export const starwarsSlice = createSlice({
  name: "starwars",
  initialState: {
    isLoading: false,
    page: 1,
    starwars: [],
    error: null,
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setStarwars: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.starwars = action.payload.starwars;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loading, setStarwars, setError } = starwarsSlice.actions;
