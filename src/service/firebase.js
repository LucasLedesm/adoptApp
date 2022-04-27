// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATdXulNkeHW887qxRen-1xGq01APyDai8",
  authDomain: "adoptapp-411ad.firebaseapp.com",
  projectId: "adoptapp-411ad",
  storageBucket: "adoptapp-411ad.appspot.com",
  messagingSenderId: "894189402304",
  appId: "1:894189402304:web:a8a9a6161fb1bdd7a25525",
  measurementId: "G-H4CSWS9JVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app)


export default db;