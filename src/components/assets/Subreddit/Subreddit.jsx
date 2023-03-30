import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedSubreddit, setSelectedSubreddit } from "../../../store/redditSlice.js";
import { EmptyReddit } from "../utils/svg.jsx";
import './Subreddit.css';

function Subreddit({ id, name, img, url }) {
    const dispatch = useDispatch();
    const selectedSubreddit = useSelector(selectSelectedSubreddit)

    let subredditImg = img === '' ? <EmptyReddit /> : <img src={img} alt={id} />;
    
    return (
        <button
            onClick={() => dispatch(setSelectedSubreddit(url))}
        >
            <div>
                {subredditImg}
            </div>
            <h4>{name}</h4>
        </button>
    )
}

export default Subreddit;