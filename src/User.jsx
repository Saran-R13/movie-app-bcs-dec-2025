import { Counter } from "./Counter";

// Presentation - Look of UI - Reuse ⬆️
export function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt="" className="user-pic" />
      <p className="user-greeting">
        Hello, <span>{name}</span>🎉🎉
      </p>

      <Counter needProgress={true} />
    </div>
  );
}