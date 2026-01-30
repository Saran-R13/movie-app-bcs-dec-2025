import { useState } from "react";
import "./index.css";
import { MovieList } from "./MovieList";

import { Msg } from "./Msg";
import { UserList } from "./UserList";
import { Counter } from "./Counter";

export default function App(){
    return(
        <div className="App">
            <ColorGame/>
        </div>
    )
}
function ColorGame() {
  const [color, setColor] = useState("pink");
  const [colorList, setColorList] = useState(["crimson", "pink", "orange"]);
 const styles = {
    backgroundColor: color,
  };
  return(
    <div>
         <input
        value={color}
             onChange={(event) => setColor(event.target.value)}
                 style={styles}
        type="text"
        placeholder="Favorite color"/>
         <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>
         {colorList.map((c) => (
        <ColorBox clr={c} />
      ))}
        
    </div>
  )
}
function ColorBox({ clr }) {
  const styles = {
    height: "1.5rem",
    width: "10rem",
    marginTop: "1rem",
    backgroundColor: clr,
  };

  return <div style={styles}></div>;
}