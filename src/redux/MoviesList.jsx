import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "./MoviesSlice";

const MoviesInput = () => {
  const movies = useSelector((state) => state.moviesist.value);

  return (
    <div>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            {movie.name}

            <button onClick={removeMovie}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default MoviesInput;
