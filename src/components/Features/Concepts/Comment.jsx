// Comment.jsx
console.log("Mounting Comment.jsx <Comment />");

import React from "react";;
import './comment.sass'

function formatDate(date) {
    return date.toLocaleDateString();
}

// function Comment(props) {
    // return (
        // <div className="Comment">
            // <div className="UserInfo">
                // <img
                    // className="Avatar"
                    // src={props.author.avatarUrl}
                    // alt={props.author.name}
                // />
                // <div className="UserInfo-name">
                    // {props.author.name}
                // </div>
            // </div>
            // <div className="Comment-text">{props.text}</div>
            // <div className="Comment-date">
                // {formatDate(props.date)}
            // </div>
        // </div>
    // );
// }

function Avatar(props) {
    return (
        <img 
            className="avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="user-info">
            <Avatar user={props.user} />
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;

// eof