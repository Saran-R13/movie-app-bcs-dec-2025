import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { INITIAL_MOVIES } from "./movies-data";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Smart
export function MovieList() {
  const [movies, setMovies] = useState([]);
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const newMovie = {
  //   // id: { Delete: FunDelete },
  //   name: name,
  //   poster: poster,
  //   rating: rating,
  //   summary: summary,
  // };
  const getMovies = () => {
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Movies", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMovies(data));
  };

  useEffect(() => {
    getMovies();
  }, []);
  const deleteMovie = (id) => {
    fetch(`https://6971d21632c6bacb12c49d51.mockapi.io/Movies/${id}`, {
      method: "Delete",
    }).then(() => getMovies());
  };
  const editMovie = () => {
    console.log("editig movie");
  };

  // function FunDelete(id) {
  //   const balMovie = movies.filter((movie) => movie.id != id);
  //   return setMovies(balMovie);
  // }
  // function EditButton() {
  //   console.log("ROUND Button");
  // }

  return (
    <div>
      <section className="movie-list-container">
        {movies.map((mv) => (
          <Movie
            movie={mv}
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => deleteMovie(mv.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              // <Button >Edit</Button>

              <IconButton
                aria-label="edit"
                color="secondary"
                onClick={() => editMovie()}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </section>
    </div>
  );
}
export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();
  const createMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then(() => navigate("/movies"));
  };
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
      <TextField
        label="Trailer"
        variant="outlined"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />
      {/* <input
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="Summary"
      /> */}
      <Button variant="contained" onClick={() => createMovie()}>
        ADD MOVIES
      </Button>

      {/* <button onClick={() => setMovies([newMovie, ...movies])}>
        Add Movie
      </button> */}
      {/* {movies.map((movie, id) => (
        // <Movie
        //   key={movie.id}
        //   movie={movie}
        //   Delete={FunDelete}
        //   id={id}
        //   Edit={<button onClick={() => EditButton()}>Edit</button>}
        // />
      ))} */}
    </div>
  );
}
