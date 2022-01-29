import MovieItem from "./MovieItem";

const MovieList = (props) => {
    console.log(props.movies)
    return(
        <ul>
            {props.movies.map((movie) => (
                <MovieItem 
                    Title={movie.Title}
                    Poster={movie.Poster}
                    Plot={movie.Plot}
                    Id={movie.imdbID}
                />
            ))}
        </ul>
    )
}

export default MovieList;