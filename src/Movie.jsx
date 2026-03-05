import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Counter } from "./Counter";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Counter } from "./Counter";


// Presentation Component
export function Movie({ movie, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img src={movie.poster} alt="" className="movie-poster" />
      <div className="movie-spec-container">
        <h2 className="movie-name">
          {movie.name}
          <IconButton
            aria-label="Toggle Summary"
            color="primary"
            onClick={() => setShow(!show)}
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {/* /movies/101 */}
          <IconButton
            aria-label="details"
            color="primary"
            onClick={() => navigate(`/movies/${movie.id}`)}
          >
            <InfoIcon />
          </IconButton>
        </h2>
        <p className="movie-rating">⭐ {movie.rating}</p>
      </div>
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <div className="movie-actions">
        <Counter needProgress={false} />
        <div className="movie-controller-container">
          {editButton} {deleteButton}
        </div>
      </div>
    </div>
  );
}

// Counter({needProgress: false} )
