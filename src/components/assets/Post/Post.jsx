import React from "react";
import './Post.css';

function Post() {
    return (
        <div>
            <div>
                {/* find svg from site in bookmarks for icons */}
                <button>up arrow</button>
                <p>like number</p>
                <button>down arrow</button>
            </div>
            <h3>Post Title</h3>
            <p>Hello World</p>
            <footer>
                <a href="#" target="_blank" >Author Name</a>
                <p>Time Posted</p>
                <button>Comments</button>
            </footer>
        </div>
    )
}

export default Post;