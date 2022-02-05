import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = '8efdf7b9';

const MovieContext = createContext({
    movies: [],
    favorites: [],
    totalFavorites: 0,
    selectedMovie: {},
})

export const MovieContextProvider = (props) => {
    const [allMovies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const [detail, setDetail] = useState('');
    const [search, setSearch] = useState('');

    const enquiryMovies = async (search) => {
        const res = await axios(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=1`
        );
        const data = res.data;
        setMovies(data.Search);
    }

    const getDetail = async (id) => {
        const res = await axios(
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        const data = res.data;
        setDetail(data);
    }

    const addFavoriteMovie = (movie) => {
        movie.isFavorite = true;
        const favorites = JSON.parse(localStorage.getItem('favorites')) ?? []; 
        const newFavoriteList = [...favorites, movie];

        localStorage.setItem('favorites', JSON.stringify(newFavoriteList));
        setFavorites(newFavoriteList)
    }

    const removeFavoriteMovie = (movie) => {
        movie.isFavorite = false;
        const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
        const newFavoriteList = favorites.filter((fav) => fav.imdbID !== movie.imdbID);

        localStorage.setItem('favorites', JSON.stringify(newFavoriteList));
        setFavorites(newFavoriteList)
    }

    const favoriteHandler = (movie, e) => {
        e.preventDefault();
        if (favorites.includes(movie)) {
          removeFavoriteMovie(movie);
        } else {
          addFavoriteMovie(movie);
        }
      };

    const initFavoriteFromLS = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
        setFavorites(favorites);
        setFavoriteCount(favorites.length)
    }

    const context = {
        movies: allMovies,
        selectedMovie: detail,
        favorites,
        totalFavorites: favorites.length,
        getDetail,
        setSearch,
        favoriteHandler,
    }

    useEffect(() => {
        console.log(API_KEY)
        enquiryMovies(search);
        initFavoriteFromLS();
      }, [search]);

    return (
        <MovieContext.Provider value={context}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContext;