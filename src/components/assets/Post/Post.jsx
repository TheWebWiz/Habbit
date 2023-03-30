import React, { useState } from "react";
import './Post.css';
import convertEpochDate from "../utils/convertEpochDate";
import { DownArrow, UpArrow } from "../utils/svg";

function Post({ post }) {
    const [voteValue, setVoteValue] = useState(0);

    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1)
        } else {
            setVoteValue(-1);
        }
    };

        const getVoteType = () => {
            if (voteValue === 1) {
                return 'up-vote';
            }
            if (voteValue === -1) {
                return 'down-vote'
            }
        }

    return (
        <article key={post.id}>
            <div>
                {/* find svg from site in bookmarks for icons */}
                <button
                  onClick={() => onHandleVote(1)}
                >
                    <UpArrow />
                </button>
                <p>{post.ups + voteValue}</p>
                <button
                  onClick={() => onHandleVote(-1)}
                >
                    <DownArrow />
                </button>
            </div>
            <h3>{post.title}</h3>
            <img src={post.url} alt={`${post.title}`} />
            <p>{post.selftext}</p>
            <footer>
                <a href={`https://www.reddit.com/u/${post.author}`} target="_blank" >{post.author}</a>
                <p>{convertEpochDate(post.created_utc)}</p>
                <button>{post.num_contents}</button>
            </footer>
        </article>
    )
}

export default Post;