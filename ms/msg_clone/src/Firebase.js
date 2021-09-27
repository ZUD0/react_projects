// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7TanAqtU9GFpDtjH_LXOXHqtvJHsvQzE",
    authDomain: "messenger-clone-57089.firebaseapp.com",
    projectId: "messenger-clone-57089",
    storageBucket: "messenger-clone-57089.appspot.com",
    messagingSenderId: "613316559399",
    appId: "1:613316559399:web:2c35ba43b7b89d997b0402",
    measurementId: "G-HQDBP5QBH3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;