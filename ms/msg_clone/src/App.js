import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');

  //useState = variable of REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    //run code here...
    //if it's blank inside[], this code runs once when the app component loads
    //if we have [input] in the dependencies it will fire every time it will change...

    setUserName(prompt('Please enter your name'));
  }, []);//condition

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})
      ))
    });

  }, []);

  const sendMessage = e => {
    e.preventDefault();


 
      db.collection('messages').add({
        text: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

    
    setInput("");
  }
  return (
    
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messenger" />
      
      <h2>{`Hey, ${username?username:"Stranger"}.`}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__formControl--input" placeholder="  Enter a message." type="text" value={input} onChange={e => setInput(e.target.value)} />
          <IconButton disabled={!input}
            variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>




        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
