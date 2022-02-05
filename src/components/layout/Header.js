import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../../service/movie-context';
import style from './Header.module.css';

function Header() {
    const movieContext = useContext(MovieContext);
    return (
        <header className={style.header}>
        <div className={style.logo}>Movie Search App</div>
        <nav>
            <ul>
            <li>
                <Link to='/'>All Movies</Link>
            </li>
            <li>
                <Link to='/favorites'>
                Favorites
                <span className={style.badge}>
                    {movieContext.totalFavorites}
                </span>
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;
