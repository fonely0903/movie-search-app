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
    const [allTitles, setTitles] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const [detail, setDetail] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const enquiryMovies = async (search) => {
        const res = await axios(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=1`
        );
        const data = res.data;
        setMovies(data.Search);
    }

    const getPossibleTitles = async (search) => {
        const res = await axios(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=1`
        );
        const titles = res.data.Search?.map(s => ({id: s.imdbID, title: s.Title}));
        setTitles(titles);
    }

    const getDetail = async (id) => {
        setIsLoading(true);
        const res = await axios(
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        const data = res.data;
        setDetail(data);
        setIsLoading(false);
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
        enquiryMovies,
        favoriteHandler,
        isLoading,
        allTitles,
    }

    useEffect(() => {
        getPossibleTitles(search);
        initFavoriteFromLS();
      }, [search]);

    return (
        <MovieContext.Provider value={context}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContext;