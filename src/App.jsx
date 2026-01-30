import "./index.css";
import { MovieList } from "./MovieList";

import { UserList } from "./UserList";
// import { BrowserRouter } from "react-router";
import { Link, Route, Routes } from "react-router";
// import{NavLink,Link} from 'react-router';

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/MovieList"> Movie</Link>
        <Link to="/UserList">user</Link>
      </nav>
      <Routes>
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </div>
  );
}
