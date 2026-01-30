import { useState } from "react";
import { Movie } from "./Movie";
import { INITIAL_MOVIES } from "./movies-data";

// Smart
export function MovieList() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const newMovie = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
  };
  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Movie Name"
      />
      <input
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        placeholder="Movie URL"
      />
      <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        type="number"
        placeholder="Ratings"
      />
      <input
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="Summary"
      />

      <button onClick={() => setMovies([newMovie, ...movies])}>
        Add Movie
      </button>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
