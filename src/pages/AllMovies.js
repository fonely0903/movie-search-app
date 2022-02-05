import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import MovieContext from "../service/movie-context";
import MovieList from "../components/movies/MovieList";

const AllMovies = () => {
    const { setSearch, movies } = useContext(MovieContext);
    const [keyword, setKeyword] = useState('');

    const updateSearch = (e) => {
        setKeyword(e.target.value)
    };

    const handleSearch = () => {
        setSearch(keyword);
    }

    return (
        <div>
            <h1>All Movies</h1>
            <SearchBar triggerSearch={handleSearch} updateKeyword={updateSearch}/>
            {movies?.length > 0 ? (
                <div>
                    <MovieList movies={movies}/>
                </div>
            ) : (
                <div>
                    No Result!
                </div>
            )}
        </div>
        
    )
}

export default AllMovies;