import React from "react";
import './Post.css';
import { useDispatch } from "react-redux";
import convertEpochDate from "../utils/convertEpochDate";

function Post({ post }) {
    const dispatch = useDispatch();

    return (
        <article key={post.id}>
            <div>
                {/* find svg from site in bookmarks for icons */}
                <button>up arrow</button>
                <p>{post.ups}</p>
                <button>down arrow</button>
            </div>
            <h3>{post.title}</h3>
            <p>{post.body_html}</p>
            <footer>
                <a href="#" target="_blank" >{post.author}</a>
                <p>{convertEpochDate(post.created_utc)}</p>
                <button>{post.num_contents}</button>
            </footer>
        </article>
    )
}

export default Post;