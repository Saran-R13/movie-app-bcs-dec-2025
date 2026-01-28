import { Counter } from "./Counter";

export function User({ name, pic}) {
  return (
    <div>
      <img className="pip-pic" src={pic} alt="" />
      <p>
        Helloo<span className="p-name">{name}</span>👋
        </p>
        <Counter/>
    </div>
    
  );
}
