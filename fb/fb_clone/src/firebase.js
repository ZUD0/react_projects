// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBk23depgnezpYhxm4mvU9WzB8utLdN8R4",
    authDomain: "fb-clone-c3f3e.firebaseapp.com",
    projectId: "fb-clone-c3f3e",
    storageBucket: "fb-clone-c3f3e.appspot.com",
    messagingSenderId: "46062134459",
    appId: "1:46062134459:web:b1732b5011d7a5f603f59e",
    measurementId: "G-12W3HDD0RG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;