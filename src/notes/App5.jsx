import { useState } from "react";
import "./index.css";
import { MovieList } from "../../MovieList";

import { Msg } from "../Msg";
import { UserList } from "../UserList";

// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts
  const names = ["Vikas", "Dhanpal", "Rahul", "Rishi", "Robin"];

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      {/* <UserList /> */}

      {/* <MovieList /> */}

      <Counter />
    </div>
    // UI Ends
  );
}

// Hook - Variable - React tracks
// Hooks - useState, useEffect, useContext, useMemo
// Hooks are function

function Counter() {
  // React does not track below variable ❌
  // let like = 10;

  // Array Destructing
  //const [state, setState] = useState(Initial_Value)
  // setState (updates) -> state
  // React - tracks - Hook variable ✅
  const [like, setLike] = useState(100);
  return (
    <div>
      {/* Event Listener - click event - camelCase */}

      <button
        onClick={() => {
          // like++;
          // console.log(like);
          // setLike(1000);
          setLike(like + 1);
        }}
      >
        Like
      </button>
      <h1>{like}</h1>
      <h1>{like}</h1>
      <h1>{like}</h1>
    </div>
  );
}