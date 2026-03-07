import { Link, Navigate, Route, Routes } from "react-router";
import "./index.css";
import { AddMovie, MovieList } from "./MovieList";

import { ColorGame } from "./ColorGame";
import { Home } from "./Home";
import { MovieDetails } from "./MovieDetails";
// import { NotFound } from "./NotFound";
import { UserList } from "./UserList";
import { BasicForm } from "./BasicForm";
import { Church } from "@mui/icons-material";

export default function App() {
  // App is mounted - GET - componentDidMount

  return (
    <div className="App">
      {/* < BasicForm/> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
          <li>
            <Link to="/movies/add">Add Movie</Link>
          </li>
          <li>
            <Link to="/basic-form">Basic Form</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/*    / -> Home    */}
        <Route path="/" element={<Home />} />
        <Route path="users" element={<UserList />} />

        {/* Old users -> films */}
        <Route path="films" element={<Navigate replace to="/movies" />} />
        <Route
          path="movies"
          element={
            <ProtectedRoute>
              <MovieList />
            </ProtectedRoute>
          }
        />

        {/* /movies ->  /movies/102  */}
        {/* : -> will treat id as variable - /movies/1 ->   id -> 1 */}
        {/* /movies/102 ->  /movies/106 */}
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="movies/add" element={<AddMovie />} />
        <Route path="basic-form" element={<BasicForm />} />

        <Route path="color-game" element={<ColorGame />} />

        <Route path="login" element={<BasicForm />} />

        {/*    * -> catch all -> Always last      */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate replace to="/login" />;
}
