import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 value:[
  {id:0,name:"Starwars"},
  {id:1,name:"StarTrek"}
 ]
};

const MoviesSlice = createSlice({
  name: "MoviesApp",
  initialState,
  reducers: {
    addMovie: (state) => {
      state.value
      
    },
  },
});

export const { addMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
