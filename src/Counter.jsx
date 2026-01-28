import { useState } from "react";
import "./index.css";


import { Msg } from "./Msg";


// 
export default function App() {
  // Logic Starts
  // const names = ["Vikas", "Dhanpal", "Rahul", "Rishi", "Robin"];

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      <UserList />

      {/* <MovieList /> */}

      <Counter />
    </div>
    // UI Ends
  );
}


export function Counter() {
  
  const [like, setLike] = useState(0);
  const [dislike,setDisLike]=useState(0);
  console.log(like);
  console.log(dislike);

  return (
    <div>
      {/* Event Listener - click event - camelCase */}

      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={()=> setDisLike(dislike+1)}>👎{dislike}</button>
      <label htmlFor="progress">Progress</label>
      {/* <progress id="progress" max={100} value={like*100/(like+dislike)}></progress> */}
      {/* <progress id="progress" max={100} value={like/(like+dislike)*100}></progress> */}
      <progress id="progress" max={like+dislike} value={like}></progress>

      
    </div>
  );
}

// clicks -> onClick -> setLike -> schedules update -> like + 1