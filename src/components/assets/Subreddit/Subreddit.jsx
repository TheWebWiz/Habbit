import React from "react";
import { EmptyReddit } from "../utils/svg.jsx";
import './Subreddit.css';

function Subreddit({ id, name, img }) {
    let subredditImg = img === '' ? <EmptyReddit /> : <img src={img} alt={id} />;
    return (
        <button>
            <div>
                {subredditImg}
            </div>
            <h4>{name}</h4>
        </button>
    )
}

export default Subreddit;