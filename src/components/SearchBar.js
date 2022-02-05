import style from './SearchBar.module.css'

const SearchBar = (props) => {
    return (
        <div className={style.inputWrapper}>
            <input 
                className={style.searchInput}
                placeholder='type a movie title...'
                onChange={props.updateKeyword}
            />
            <button
                className={style.searchBtn}
                type='submit'
                onClick={props.triggerSearch}
            >Submit</button>
        </div>
    );
}

export default SearchBar;