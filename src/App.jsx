// import { useEffect } from "react";
// import { useState } from "react";
import "./index.css";
import { MovieList } from "./MovieList";

import { UserList } from "./UserList";
// import { BrowserRouter } from "react-router";
import { Link, Route, Routes, } from "react-router";
import { MovieDetails } from "./MovieDetails";
// import{NavLink,Link} from 'react-router';

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/MovieList"> Movie</Link>
          </li>
          <li>
            <Link to="/users">user</Link>
          </li>
        </ul>
        <Link to="/movies">MovieList</Link>
        <Link to="/details">MovieDetails</Link>
      </nav>
      <Routes>
        {/*    / -> Home    */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="users" element={<UserList />} />

        {/* Old users -> films */}
        {/* <Route path="films" element={<Navigate replace to="/movies" />} /> */}
        {/* <Route path="films" element={<MovieList />} /> */}
        <Route path="movies" element={<MovieList />} />
        <Route path="details" element={<MovieDetails />} />

        {/* : -> will treat id as variable - /movies/1 ->   id -> 1 */}
        {/* <Route path="movies/:id" element={<MovieDetails />} /> */}

        {/* <Route path="color-game" element={<ColorGame />} /> */}

        {/*    * -> catch all -> Always last      */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
