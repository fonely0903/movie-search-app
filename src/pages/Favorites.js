import { useContext } from "react";

import MovieContext from "../service/movie-context";
import MovieList from "../components/movies/MovieList";

const Favorites = () => {
    const movieContext = useContext(MovieContext);

    let content;
    
    if (movieContext.totalFavorites === 0) {
        content = <p>You had no favorite yet. Start adding some?</p>
    }
    else {
        content = <MovieList movies={movieContext.favorites} />;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites;