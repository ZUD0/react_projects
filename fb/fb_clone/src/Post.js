import React, { useState } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ id, profilePic, image, username, timestamp, message }) {
    
    let isblue = localStorage.getItem("isblue");
    if (isblue) {
        setBlue(is)
    }
    const [blue, setBlue] = useState(false);
    const turnColor = () => {
        let Id = "#" + id;
        console.log("this is id>> ", Id);
        if (!blue) {
            document.querySelector(Id).style.color = "#2e81f4";
            setBlue(true);
            localStorage.setItem("isblue", JSON.stringify(blue));
        }
    
    else {
        document.querySelector(Id).style.color = "grey"
        setBlue(false);
        localStorage.setItem("isblue", JSON.stringify(blue));
        }
    }
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} cl
                    assName="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon onClick={() => turnColor()} id={id} className="post__option--thumbsUpIcon" />
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />

                </div>
            </div>
        </div>
    )
}

export default Post;
