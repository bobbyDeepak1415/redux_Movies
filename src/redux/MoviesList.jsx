import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "./MoviesSlice";

const MoviesInput = () => {
  const movies = useSelector((state) => state.moviesist.value);

  const dispatch = useDispatch();

  return (
    <div>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            {movie.name}

            <button onClick={() => dispatch(removeMovie(movie.id))}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default MoviesInput;
