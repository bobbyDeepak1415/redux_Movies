import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 0, name: "Starwars" },
    { id: 1, name: "StarTrek" },
  ],
};

const MoviesSlice = createSlice({
  name: "MoviesApp",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.value.length ? state.value[state.value.length - 1].id + 1 : 0,
        name: action.payload,
      };
      state.value.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.value = state.value.filter((state) => state.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
