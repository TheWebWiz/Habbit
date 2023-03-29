import React from "react";
import Post from "../Post/Post";
import './PostList.css';
import { useDispatch, useSelector } from "react-redux";

function PostList() {
    const dispatch = useDispatch();
    const { posts } = useSelector((store) => store.reddit);

    return (
        <section>
           {posts.map((post) => {
            return <Post key={post.id} {...item} />;
           })}
        </section>
    )
}

export default PostList;