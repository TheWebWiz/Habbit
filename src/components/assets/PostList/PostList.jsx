import React, { useEffect } from "react";
import Post from "../Post/Post";
import './PostList.css';
import { useDispatch, useSelector } from "react-redux";
import { 
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
    fetchComments,
} from "../../../store/redditSlice";

function PostList() {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    return (
//if 18+ no

        <section>
           {posts.map((post, index) => (
            <Post
              key={post.id}
              post={post}
            />
           ))}
        </section>
    );
};

export default PostList;