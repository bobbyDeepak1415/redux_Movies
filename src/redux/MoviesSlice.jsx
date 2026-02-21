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
    addMovie: (state,action) => {

      const newMovie={
        id:state.value.length ? state.value
      }
      
    },
    removeMovie: (state) => {
      state.value
      
    },
  },
});

export const { addMovie,removeMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
