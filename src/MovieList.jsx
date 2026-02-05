import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { INITIAL_MOVIES } from "./movies-data";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Smart
export function MovieList() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const newMovie = {
    // id: { Delete: FunDelete },
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
  };
  useEffect(() => {
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  function FunDelete(id) {
    const balMovie = movies.filter((movie) => movie.id != id);
    return setMovies(balMovie);
  }
  return (
    <div className="movie-input">
      <TextField
        label="Name"
        // color="secondary"
        focused
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {/* <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Movie Name"
      /> */}
      <TextField
        label="URL"
        // color="secondary"
        focused
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      {/* <input
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        placeholder="Movie URL"
      /> */}
      <TextField
        label="Rating"
        // color="secondary"
        focused
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      {/* <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        type="number"
        placeholder="Ratings"
      /> */}
      <TextField
        label="Summary"
        // color="secondary"
        focused
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      {/* <input
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="Summary"
      /> */}
      <Button
        variant="contained"
        disableElevation
        onClick={() => setMovies([newMovie, ...movies])}
      >
        ADD MOVIES
      </Button>

      {/* <button onClick={() => setMovies([newMovie, ...movies])}>
        Add Movie
      </button> */}
      {movies.map((movie, id) => (
        <Movie key={movie.id} movie={movie} Delete={FunDelete} id={id} />
      ))}
    </div>
  );
}
