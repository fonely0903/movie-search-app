import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import MovieContext from "../service/movie-context";

import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import style from './Detail.module.css'
import loader from '../img/Spinner-1s-200px.gif'

const Detail = () => {
    const { id } = useParams();
    const { getDetail, selectedMovie, isLoading } = useContext(MovieContext);

    useEffect(() => {
        getDetail(id);
      }, []);

    if (isLoading) {
        return (
            <div className={style.loading}>
                <img src={loader} alt="loading"/>
            </div>
        )
    }
    return (
        <div>
            <h1>Movie Detail</h1>
            <div className={style.movieInfo}>
                <div className={style.posterWrapper}>
                    <img src={selectedMovie.Poster} alt={selectedMovie.Title}/>
                </div>
                <div className={style.infoDetail}>
                    <div className={style.mainInfo}>
                        <h1>{selectedMovie.Title}</h1>
                        <div className={style.imdbRating}>
                            <span className={style.block}>IMDB Rating</span>
                            <span className={[style.block, style.imdbRatingNum].join(' ')}>{selectedMovie.imdbRating}</span>
                            <span className={style.block}><FontAwesomeIcon icon={faChild}/> {selectedMovie.imdbVotes}</span>
                        </div>
                    </div>
                    <p>{selectedMovie.Plot}</p>

                    <div className={style.otherInfo}>
                        <div>
                            <p>Released: {selectedMovie.Released}</p>
                            <p>Director: {selectedMovie.Director}</p>
                            <p>Actors: {selectedMovie.Actors}</p>
                            <p>Language: {selectedMovie.Language}</p>
                            <p>Runtime: {selectedMovie.Runtime}</p>
                        </div>
                        
                        <div className={style.ratings}>
                            {selectedMovie.Ratings?.map((rating) => {
                                return (
                                    <div key={rating.Source} className={style.ratingItem}>
                                        <span>{rating.Source}</span>
                                        <div className={style.scoreWrapper}>
                                            <span>{rating.Value}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className={style.plotWrapper}>
                
            </div>
        </div>
    );
}

export default Detail;