import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import MovieContext from "../service/movie-context";

const Detail = () => {
    const { id } = useParams();
    const { getDetail, selectedMovie } = useContext(MovieContext);

    useEffect(() => {
        getDetail(id);
      }, []);

    return (
        <div>
            <h1>Movie Detail</h1>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title}/>
            <p>Movie Title: {selectedMovie.Title}</p>
            <p>Plot: {selectedMovie.Plot}</p>
            {/* Released */}
            {/* Ratings */}
            {/* Actors */}
            {/* Language */}
        </div>
    );
}

export default Detail;