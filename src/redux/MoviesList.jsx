import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MoviesList = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.value);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            {movie.name}
            <button onClick={() => dispatch(removeMovie(id))}>Remove</button>
          </li>
        );
      })}
    </div>
  );
};

export default MoviesList;
