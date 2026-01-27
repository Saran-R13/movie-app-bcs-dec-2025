import { Counter } from "./Counter";

export function User({ name, img}) {
  return (
    <div>
      <img className="pip-pic" src={img} alt="" />
      <p>
        Helloo<span className="p-name">{name}</span>👋
        
      </p>
      
    </div>
    
  );
}
