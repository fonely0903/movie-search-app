import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import MovieContext from "../service/movie-context";
import MovieList from "../components/movies/MovieList";

const AllMovies = () => {
    const { setSearch, movies, allTitles, enquiryMovies } = useContext(MovieContext);
    const [keyword, setKeyword] = useState('');

    const updateSearchByEvent = (e) => {
        setSearch(e.target.value);
        setKeyword(e.target.value)
    };

    const updateSearchByParams = (keyword) => {
        setSearch(keyword);
        setKeyword(keyword);
    }

    const handleSearch = () => {
        enquiryMovies(keyword);
    }

    return (
        <div>
            <h1>All Movies</h1>
            <SearchBar triggerSearch={handleSearch} updateKeywordByEvent={updateSearchByEvent} updateKeywordByParams={updateSearchByParams}/>
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