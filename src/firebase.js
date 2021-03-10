import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB15BLgqXC6wgLfzeFtHw-7B84jcdB8pR8",
        authDomain: "tienda-react-717ce.firebaseapp.com",
        projectId: "tienda-react-717ce",
        storageBucket: "tienda-react-717ce.appspot.com",
        messagingSenderId: "903566159411",
        appId: "1:903566159411:web:3433e8d24ea596ee553d46"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


