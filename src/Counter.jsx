import { useState } from "react";

export function Counter({ needProgress }) {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  // Callback - ✅
  const updateLike = () => setLike((currentLike) => currentLike + 1);
  // Callback - ❌
  const updateDisLike = () => setDisLike(disLike + 1);

  return (
    <div>
      {/* Event Listener - click event - camelCase */}

      <div
        className={
          needProgress
            ? "counter-btn-container counter-btn-container-center"
            : "counter-btn-container"
        }
      >
        <button onClick={updateLike}>👍 {like}</button>
        <button onClick={updateDisLike}>👎 {disLike}</button>
      </div>
      {/* <progress max={100} value={(like * 100) / (like + disLike)}></progress> */}

      {/* {like - disLike >= 10 ? <h2>You are awesome 🎊🎊</h2> : ""} */}

      {/* {like >= disLike + 10 ? <h2>You are awesome 🎊🎊</h2> : ""} */}

      {/* {like >= disLike + 10 ? <h2>You are awesome 🎊🎊</h2> : null} */}

      {/* Senior */}
      {needProgress && (
        <div>
          <progress max={like + disLike} value={like}></progress>
          {like >= disLike + 10 && <h2>You are awesome 🎊🎊</h2>}
        </div>
      )}
    </div>
  );
}

function Counter1() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const updateLike = () => {
    // Batched
    setLike((currentLike) => currentLike + 1);
    setLike((currentLike) => currentLike + 1);
    setLike((currentLike) => currentLike + 1);

    // setLike(like + 1);
    // setLike(like + 1);
    // setLike(like + 1);
  };

  const updateDisLike = () => setDisLike(disLike + 1);

  return (
    <div>
      {/* Event Listener - click event - camelCase */}
      <button onClick={updateLike}>👍 {like}</button>
      <button onClick={updateDisLike}>👎 {disLike}</button>
    </div>
  );
}