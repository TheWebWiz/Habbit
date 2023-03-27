import React from "react";
import './Post.css';
import LikeCounter from "../LikeCounter/LikeCounter";
import PostContent from "../PostContent/PostContent";
import PostFooter from "../PostFooter/PostFooter";

function Post() {
    return (
        <div>
            <LikeCounter />
            <h3>Post Title</h3>
            <PostContent />
            <PostFooter />
        </div>
    )
}

export default Post;