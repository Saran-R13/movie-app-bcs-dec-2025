export function Movie1({name,poster,summary,ratings}){
    return(
        <div className="card-box">
            <img className="pip-pic" src={poster} alt="" />
            <p>
              <span className="p-name">{name}{summary}{ratings}</span>  
            </p>
        </div>
    )
}