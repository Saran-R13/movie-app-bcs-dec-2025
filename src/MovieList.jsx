import { Movie } from "./Movie";
import { INITIAL_MOVIES } from "./movies-data";

// Smart
export function MovieList() {
  const movies = INITIAL_MOVIES;

  return (
    <section className="movie-list-container">
      {movies.map((mv) => (
        <Movie movie={mv} />
      ))}
    </section>
  );
}