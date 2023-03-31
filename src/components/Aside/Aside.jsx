import React from "react";
import './Aside.css';
import Subreddit from "../assets/subreddit/subreddit";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedSubreddit, setSelectedSubreddit } from "../../store/redditSlice";

function Aside() {
    const {subreddits} = useSelector((state) => state.subreddit);


    return (
        <aside>
            <h2>Communities</h2>
            <div>
                {subreddits.map((subreddit) => {
                    return (
                        <Subreddit
                        key={subreddit.id}
                        id={subreddit.id}
                        name={subreddit.name}
                        img={subreddit.img}
                        url={subreddit.link}
                    />
                   )
                })}
            </div>
        </aside>
    )
}

export default Aside;