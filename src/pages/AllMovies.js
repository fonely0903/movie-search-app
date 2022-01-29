import React, { useContext } from "react";

import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import MovieContext from "../service/movie-context";
import MovieItem from "../components/movies/MovieItem";
import MovieList from "../components/movies/MovieList";

const AllMovies = () => {
    const { setSearch, movies } = useContext(MovieContext);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <h1>All Movies</h1>
            <SearchBar triggerSearch={handleSearch}/>
            {movies?.length >0 ? (
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