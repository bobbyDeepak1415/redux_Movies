import { configureStore } from "@reduxjs/toolkit";

import  MoviesReducer  from "./MoviesSlice";

const store = configureStore({
  reducer: {
    moviesList: MoviesReducer,
  },
});

export default store;
