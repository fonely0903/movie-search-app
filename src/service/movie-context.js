import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = '8efdf7b9';

const MovieContext = createContext({
    movies: [],
    selectedMovie: {},
})

export const MovieContextProvider = (props) => {
    const [allMovies, setMovies] = useState([]);
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
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );
        const data = res.data;
        setDetail(data);
    }

    const context = {
        movies: allMovies,
        selectedMovie: detail,
        getDetail,
        setSearch,
    }

    useEffect(() => {
        console.log(API_KEY)
        enquiryMovies(search);
      }, [search]);

    return (
        <MovieContext.Provider value={context}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContext;