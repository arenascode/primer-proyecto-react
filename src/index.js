import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { initializeApp } from "firebase/app";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFihOVUux8uOAMyMCYQrGvdjzC1Ac1q7M",
  authDomain: "primer-proyecto-react-coder.firebaseapp.com",
  projectId: "primer-proyecto-react-coder",
  storageBucket: "primer-proyecto-react-coder.appspot.com",
  messagingSenderId: "477975675386",
  appId: "1:477975675386:web:6a552c1490ee92c3aba443"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);


