import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

//import { HttpsError, beforeUserCreated } from "firebase-functions/v2/identity";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaHXfEvKTF01TuJIf50ZVJe_nlnuU4QPU",
  authDomain: "owl-judge.firebaseapp.com",
  projectId: "owl-judge",
  storageBucket: "owl-judge.appspot.com",
  messagingSenderId: "339201974480",
  appId: "1:339201974480:web:20acafd7aea7b25fe63ed5",
  measurementId: "G-45D4H0G9WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Function used for new user Sign Up [New User Request]
export const signUp = async (email, password, firstName, lastName, dob) => {
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed up
      const user = userCredential.user;
      console.log("User Created:" + user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode + " " + errorMessage);
    })
};

/*const beforecreated = beforeUserCreated((event) => {
  const user = event.data;

  if(!user?.email?.includes("@students.kennesaw.edu")) {
    throw new HttpsError('invalid-argument', "Unauthorized email");
  }
})*/

export {auth, app, firebaseConfig}



