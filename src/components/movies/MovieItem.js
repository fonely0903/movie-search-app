import { Link } from "react-router-dom";

import style from './MovieItem.module.css';
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieItem = (props) => {
    return(
        <li className={style.movieItem} key={props.Id}>
            <div className={style.posterWrapper}>
                <Link 
                    to={`/detail/${props.Id}`}
                    key={props.Id}>
                    <p className={style.title}>{props.Title}</p>
                </Link>
                <div className={style.poster}>
                    {(props.Poster !== 'N/A')  ? (
                        <img 
                            src={props.Poster} 
                            alt={props.Title} 
                            width='300px'
                            height='450px'
                            ></img>
                    ) : (
                        <div className={style.noPoster}>
                            No Poster Found
                        </div>    
                    )}
                </div>
                <div className={style.icon} onClick={props.addFavorite}>
                    {props.isFavorite ? (
                        <i><FontAwesomeIcon icon={faHeartSolid} /></i>
                    ) : (
                        <i><FontAwesomeIcon icon={faHeartRegular} /></i>
                    )}
                </div>
            </div>
        </li>
    );
}

export default MovieItem;