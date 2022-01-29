const SearchBar = (props) => {
    return (
        <div className='input-wrapper'>
            <input 
                className='search-bar'
                placeholder='type a movie title...'
                onChange={props.triggerSearch}
            />
            <button
                className='submit-btn'
                type='submit'
            >Submit</button>
        </div>
    );
}

export default SearchBar;