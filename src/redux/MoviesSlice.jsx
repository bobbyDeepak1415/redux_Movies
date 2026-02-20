import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 0, name: "StarWars" },
    { id: 1, name: "StarTrek" },
  ],
};

const MoviesSlice = createSlice({
  name: "MoviesApp",
  initialState,
  reducers: {
    addMovie: () => {},
  },
});

export const { addMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
