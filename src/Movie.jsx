import { useState } from "react";
import { Counter } from "./Counter";

// Presentation Component
export function Movie({ movie }) {

  const [show,setshow]=useState(true)

  return (
    <div className="movie-container">
      <img src={movie.poster} alt="" className="movie-poster" />

      <div className="movie-spec-container">
        <h2 className="movie-name">{movie.name}</h2>
        <p className="movie-rating">⭐ {movie.rating}</p>
      </div>

      <button  onClick={()=>setshow(!show)}>Toggle Summary </button>
      
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      {/* Parent -> Child (data) - Props */}
      <Counter needProgress={false} />
    </div>
  );
}

// Counter({needProgress: false} )