// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrG4LYGOarY7j3Jk_jAddQClP8Qh5wvZA",
  authDomain: "proyectocastelo.firebaseapp.com",
  projectId: "proyectocastelo",
  storageBucket: "proyectocastelo.appspot.com",
  messagingSenderId: "814278357825",
  appId: "1:814278357825:web:166441248254418248a7c0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)