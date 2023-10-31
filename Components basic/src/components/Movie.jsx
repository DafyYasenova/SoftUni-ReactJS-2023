export default function Movie(props) {
    return (
        <li>
            <h2>{props.data.title}</h2>
            <p>Year: {props.data.year}</p>
            <p>Cast: {props.data.cast}</p>
            <p>Genre: {props.data.genre}</p>
        </li>
    );
}