import Movie from "./Movie"
import Heading from "./Heading";


export default function MovieList(props) {
    
    return (
        <div className="movie-list">
           <Heading>Some heading == prop.children</Heading>
            <ul>
            <Movie data={props.movies[0]} />
                
            </ul>
        </div>
    )
}