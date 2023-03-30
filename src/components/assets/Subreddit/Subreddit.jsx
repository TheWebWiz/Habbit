import React from "react";
import './Subreddit.css';

function Subreddit({ id, name, img }) {
    return (
        <button>
            <img src={img} alt={id} />
            <h4>{name}</h4>
        </button>
    )
}

export default Subreddit;