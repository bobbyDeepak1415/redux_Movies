import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "./MoviesSlice";

const MoviesList = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.value);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            {movie.name}
            <button onClick={() => dispatch(removeMovie(movie.id))}>
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default MoviesList;
