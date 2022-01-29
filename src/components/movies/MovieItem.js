import { Link } from "react-router-dom";

const MovieItem = (props) => {
    console.log(props)
    return(
        <li className='poster'>
            <Link
                to={`detail/${props.Id}`}
                key={props.Id}>
                <h3>{props.Title}</h3>
            </Link>
            <div className='img-wrapper'>
                <span>Movie Poster</span>
                <img src={props.Poster} alt={props.Title}></img>
                <span>{props.Plot}</span>
            </div>
        </li>
    );
}

export default MovieItem;