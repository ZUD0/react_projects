import React, { forwardRef } from 'react';
import './Message.css';
import { Card, CardContent, Typography } from "@material-ui/core";



const Message = forwardRef(({ username, message }, ref) => {
    
    const isUser = (username === message.username);

    return (
        <div ref={ref} className={`message ${isUser && "message__user"}`}>
            <span className="message__userName">{!isUser && `${message.username ? message.username : "Unknown"}  `}
            </span>
            <br/>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h3"
                    >
                       
                        {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
})

export default Message;
