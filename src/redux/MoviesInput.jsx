import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "./MoviesSlice";

const MoviesInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (!newMovie.trim()) return;
    dispatch(addMovie(newMovie));
    setNewMovie("");
  };...

  return (
    <div>
      <input
        onChange={(e) => setNewMovie(e.target.value)}
        value={newMovie}
      ></input>
      <button onClick={handleAddMovie}>Add</button>
    </div>
  );
};

export default MoviesInput;
