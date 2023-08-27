// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQUG4P5VX2zWiyVjhn7YvOyP5OslPuQ4w",
  authDomain: "clone-project-65460.firebaseapp.com",
  projectId: "clone-project-65460",
  storageBucket: "clone-project-65460.appspot.com",
  messagingSenderId: "1044360893488",
  appId: "1:1044360893488:web:a8bdc3a73c9bebc69449f5",
  measurementId: "G-PX44LWQLV9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();


export { auth, db };
