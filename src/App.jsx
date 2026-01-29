import { useState } from "react";
import "./index.css";
import { MovieList } from "./MovieList";

import { Msg } from "./Msg";
import { UserList } from "./UserList";
import { Counter } from "./Counter";
import fun from "./shared";

// JSX expressions must have one parent
// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts
  const names = ["Vikas", "Dhanpal", "Rahul", "Rishi", "Robin"];

  // Logic Ends
  return (
    // UI Starts
    // React fragment <> </>
    <div className="App">
      {/* <UserList /> */}
      {/* <MovieList /> */}
      {/* <Counter /> */}
      <ColorGame/>

      {/* Ternary operator - Conditional rendering */}
      {/* {5 < 4 ? <h1>Cool</h1> : <p>Fun</p>} */}
    </div>
    // UI Ends
  );
}

function ColorGame(){
  const[color,setcolor]=useState("");
  const ColorsList=['yellow','orange','black']
  const ColorList=["crimson",'green','red'];

  const  styles = {
    backgroundColor: color,
  };
  
  return(
    <div>
      <input value={color}
        onChange={(event) => setcolor(event.target.value)}
      style={styles}type="text" placeholder="FaveColor" />
      <h2>{color}</h2>

       {/* {ColorList.map((color)=><ColorBox color1={color}/>)} */}
       {ColorsList.map((clr)=><ColorBox color1={clr}/>)}

      {/* <ColorBox/> */}
      {/* <ColorBox/> */}
      {/* <ColorBox/> */}
    </div>
  )
}
// export function Colors({}){

// }

function ColorBox({color1}){
  const styles={
    height:"1rem",
    width:"5rm",
    backgroundColor:color1,
    marginTop:"1rem"
  }
  return(
   
    <div style={styles}></div>
  )
}