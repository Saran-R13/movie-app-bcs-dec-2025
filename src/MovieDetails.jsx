import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  // GET the movie details from API
  useEffect(() => {
    fetch(`https://6971d21632c6bacb12c49d51.mockapi.io/Movies/${id}`, {
      method: "Get",
    })
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);
  const navigate = useNavigate();
  if (!movie) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      {/* <h1>
        This is MovieDetails page of {movie.id} - {movie.name}
      </h1> */}
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/JbyyhK4E-AM"
        title="ANIMAL (Tamil Official Trailer) Ranbir Kapoor, Rashmika, Anil K, Bobby D |Sandeep Vanga | Bhushan K"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="movie-spec-container">
        <h2 className="movie-name">{movie?.name}</h2>
        <p className="movie-rating">⭐ {movie?.rating}</p>
      </div>
      <p className="movie-summary">{movie?.summary}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
