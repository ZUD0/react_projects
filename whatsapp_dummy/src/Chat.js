import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, DvrTwoTone, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Chat.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';

function Chat() {

    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [{ user }, dispatch] = useStateValue();
    const { roomId } = useParams();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(
                snapshot => {
                    setRoomName(snapshot.data().name)
                    console.log("This is roomName",roomName);
                }
            )
            db.collection('rooms').doc(roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()));
            })
        }
    }, [roomId])


    const sendMessage = e => {
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");

    };

    return (
        <div className="chat">
            <div className="chat__header">
                <IconButton>
                    <Avatar src={`https://avatars.dicebear.com/api/male/${roomId}.svg `} />
                </IconButton>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className="chat__headerRight">

                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name==user.displayName && 'chat__reciever'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timeStamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form action="" >
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="   type a message" />
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Chat;
