import { useState } from "react";
import { ColorBox } from "./ColorBox";

const INITIAL_COLORS = ["crimson", "pink", "orange"];
export function ColorGame() {
  const [color, setColor] = useState("pink");

  // Todo: Change into Hook variable
  const [colorList, setColorList] = useState(INITIAL_COLORS);

  const styles = {
    backgroundColor: color,
  };

  // Task 1
  // 1.1. Echo on screen
  // 1.2. Change the color to the typed color
  return (
    <div>
      {/* Data binding */}
      <input
        value={color}
        // Universal event listener - radio, checkbox
        onChange={(event) => setColor(event.target.value)}
        // Styles we are binding to style
        style={styles}
        type="text"
        placeholder="Favorite color"
      />
      {/* Copy colorList + new color */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {colorList.map((c) => (
        <ColorBox clr={c} />
      ))}

      {/* <ColorBox />
            <ColorBox /> */}

      {/* <h1>{color}</h1> */}
    </div>
  );
}
