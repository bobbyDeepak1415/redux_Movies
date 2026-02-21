import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 value:"StarWars"
};

const MoviesSlice = createSlice({
  name: "MoviesApp",
  initialState,
  reducers: {
    addMovie: (state) => {
      
    },
  },
});

export const { addMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
