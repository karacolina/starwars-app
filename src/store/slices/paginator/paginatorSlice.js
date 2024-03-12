import { createSlice } from "@reduxjs/toolkit";

export const paginatorSlice = createSlice({
  name: "paginator",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.value += 1;
    },
    decrement: (state /* action */) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = paginatorSlice.actions;
