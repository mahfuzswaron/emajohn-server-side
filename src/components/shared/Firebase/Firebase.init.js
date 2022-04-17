// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDd42ucLGcBsPnwNFM43u9VFfsbJw6iWo",
  authDomain: "doc-online-1.firebaseapp.com",
  projectId: "doc-online-1",
  storageBucket: "doc-online-1.appspot.com",
  messagingSenderId: "475420338838",
  appId: "1:475420338838:web:76e9c7e4d482f6b1db30b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);