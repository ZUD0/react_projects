import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABwDCgHOMhLKa30Zh2BEjEyUsIN68lwlY",
    authDomain: "whatsapp-dummy-83618.firebaseapp.com",
    projectId: "whatsapp-dummy-83618",
    storageBucket: "whatsapp-dummy-83618.appspot.com",
    messagingSenderId: "788252842329",
    appId: "1:788252842329:web:1ff62fcdd48bdc533c5448",
    measurementId: "G-DG82VG92G0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
