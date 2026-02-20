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
    addMovie: (state, action) => {
      const newMovie = {
        id:
          state.value.length > 0
            ? state.value[state.value.length - 1].id + 1
            : 1,
        name: action.payload,
      };
      state.value.push(newMovie)
    },
  },
});

export const { addMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
