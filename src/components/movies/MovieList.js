import React, { useContext } from 'react';

import MovieItem from "./MovieItem";

import MovieContext from '../../service/movie-context';
import style from './MovieList.module.css'

const MovieList = (props) => {
    const { favoriteHandler} = useContext(MovieContext);

    const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];

    return(
        <ul className={style.movieList}>
            {props.movies?.map((movie) => (
                <MovieItem 
                    key={movie.imdbID}
                    Title={movie.Title}
                    Poster={movie.Poster}
                    Plot={movie.Plot}
                    Id={movie.imdbID}
                    isFavorite={ favorites.some(f => f.imdbID === movie.imdbID) }
                    addFavorite={(e) => favoriteHandler(movie,e)}
                />
            ))}
        </ul>
    )
}

export default MovieList;