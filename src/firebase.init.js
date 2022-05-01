// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBHuRL_WNuU7PzNzxMSeYezjELFTXrC0w",
    authDomain: "book-store-clint.firebaseapp.com",
    projectId: "book-store-clint",
    storageBucket: "book-store-clint.appspot.com",
    messagingSenderId: "98624275151",
    appId: "1:98624275151:web:62cb3a12a9a471e969adba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;