export function Movie({ name, poster, summary, rating }) {
  return (
    
    <div  className="card-box">
      <img className="pip-pic" src={poster} alt="" />
      <p>
        <span className="p-name">{name}{summary}{rating}</span>
      </p>
    </div>
  );
}
