import React, { useContext, useState } from "react";

import style from './SearchBar.module.css'

import MovieContext from "../service/movie-context";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const SearchBar = (props) => {
    const { allTitles, search } = useContext(MovieContext);
    const [keyword, setKeyword] = useState(search);
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [focus, setFocus] = useState(false);

    const chooseAutoComplete = (e) => {
        if(e.keyCode === 38){
            setActiveSuggestion((activeSuggestion > -1) ? activeSuggestion-1 : activeSuggestion);
        }
        else if (e.keyCode === 40){
            setActiveSuggestion((activeSuggestion < allTitles.length - 1) ? activeSuggestion+1 : activeSuggestion);
        }
        else if (e.keyCode === 13){
            setKeywordByParams(allTitles[activeSuggestion].title)
            setActiveSuggestion(0)
            props.updateKeywordByParams(allTitles[activeSuggestion].title)
            setFocus(false)
        }
    }

    const setKeywordByParams = (keyword) => {
        setKeyword(keyword)
        props.updateKeywordByParams(keyword)
        setFocus(false);
    }

    const onChange = (e) => {
        const userInput = e.currentTarget.value;
        setKeyword(userInput);
        props.updateKeywordByEvent(e)
    }

    const onClick = (e) => {
        props.triggerSearch(e);
        setFocus(false);
    }

    return (
        <div className={style.inputWrapper}>
            <span className={style.searchTitle}>Name: </span>

            <div>
                <input 
                    className={style.searchInput}
                    placeholder='type a movie title...'
                    onChange={onChange}
                    value={keyword}
                    onKeyDown={chooseAutoComplete}
                    onFocus={() => setFocus(true)}
                />
                {focus ? (
                    <ul className={style.autoCompleteList}>
                        {allTitles?.map((item, index) => {
                            let className;
                            if(index === activeSuggestion) {
                                className = style.activeSuggestion
                            }
                            return (
                                <li 
                                    key={item.id} 
                                    data-id={item.id}
                                    className={[style.autoCompleteItem, className].join(' ')}
                                    onClick={() => setKeywordByParams(item.title)}
                                >{item.title}</li>
                            );
                        }
                        )}
                    </ul>
                ) : (
                    null
                )}
            </div>
            <button
                className={style.searchBtn}
                type='submit'
                onClick={onClick}
            >Submit</button>
        </div>
    );
}

export default SearchBar;