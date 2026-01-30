import { useState } from "react";
import "./index.css";
import { MovieList } from "../../MovieList";

import { Msg } from "../Msg";
import { UserList } from "../UserList";

// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts
  // const names = ["Vikas", "Dhanpal", "Rahul", "Rishi", "Robin"];

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

// C = F(S) - Component is function of state -  y = f(x)
function Counter() {
  // Array Destructing
  //const [state, setState] = useState(Initial_Value)
  // setState (updates) -> state
  // React - tracks - Hook variable ✅
  const [like, setLike] = useState(100);
  console.log(like);

  return (
    <div>
      {/* Event Listener - click event - camelCase */}

      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
    </div>
  );
}

// clicks -> onClick -> setLike -> schedules update -> like + 1