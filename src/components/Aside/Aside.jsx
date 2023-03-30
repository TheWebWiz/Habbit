import React from "react";
import './Aside.css';
import Subreddit from "../assets/subreddit/subreddit";
import { useSelector } from "react-redux";

function Aside() {
    const {subreddits} = useSelector((state) => state.subreddit)

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
                    />
                   )
                })}
                {console.log(subreddits)}
            </div>
        </aside>
    )
}

export default Aside;