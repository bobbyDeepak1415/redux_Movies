import "./App.css";
import MoviesInput from "./redux/MoviesInput";
import MoviesList from "./redux/MoviesList";

function App() {
  return (
    <>
      <div>
        <MoviesInput />
        <MoviesList />
      </div>
    </>
  );
}

export default App;
