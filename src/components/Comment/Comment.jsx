import React from "react";
import convertEpochDate from "../assets/utils/convertEpochDate";

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div>
                <img
                    src={`https://api.adorable.io/avatars/10/${comment.name}`}
                    alt={`${comment.name} profile`}
                    className="avatar-profile-image"
                />
                <p className="comment-author">{comment.author}</p>
                <p>{convertEpochDate(comment.created_utc)}</p>
            </div>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment;