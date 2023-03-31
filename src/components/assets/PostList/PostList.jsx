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
import ReactLoading from 'react-loading';

function PostList() {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    };

    if (isLoading === true) {
        return (
            <div>
                <ReactLoading type={'spin'} color={'#000'} height={667} width={375} />
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div>
                <h2>No posts matching "{searchTerm}"</h2>
                <button onClick={() => dispatch(setSearchTerm(''))}>
                    Go home
                </button>
            </div>
        );
    }

    

    return (
//if 18+ no
//no pinned content

        <section className="post-list">
           {posts.map((post, index) => (
            <Post
              key={post.id}
              post={post}
              onToggleComments={onToggleComments(index)}
            />
           ))}
        </section>
    );
};

export default PostList;