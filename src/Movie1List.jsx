import { Movie1 } from "./Movie1";
import {RESEND_MOVIES} from "./movies1-data";

export function Movies1List(){
const Movies=RESEND_MOVIES;
return(
    <section className="movie-list-container">
        {Movies.map((mv)=>(
            <Movies movie={mv}/>
        ))}
    </section>
)
}