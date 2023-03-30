import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/redditSlice";
import { SearchIcon } from "../assets/utils/svg";
import './Header.css';

function Header(){
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (action) => {
        setSearchTermLocal(action.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (action) => {
        action.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    return (
        <header>
            <h1>Habbit</h1>
            <form onSubmit={onSearchTermSubmit}>
                <input 
                    type="text" 
                    placeholder="Search"
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                />
                <button 
                    type="submit"
                    onClick={onSearchTermSubmit} 
                >
                <SearchIcon />
                </button>
            </form>
            <p>Make being Happy your new Habbit!!</p>
        </header>
    )
}
export default Header;