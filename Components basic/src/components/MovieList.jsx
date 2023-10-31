import Movie from "./Movie"

export default function MovieList(props) {
    
    return (
        <div className="movie-list">
            <h2>{props.headingText}</h2>
            <ul>
            <Movie data={props.movies[0]} />
                
            </ul>
        </div>
    )
}