import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCesORU-GcWjcer8KtE1fhVcxc1FB17CE4",
    authDomain: "line-clone-446c8.firebaseapp.com",
    projectId: "line-clone-446c8",
    storageBucket: "line-clone-446c8.appspot.com",
    messagingSenderId: "361181734128",
    appId: "1:361181734128:web:02309bca2f4d32b12d0e35"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };