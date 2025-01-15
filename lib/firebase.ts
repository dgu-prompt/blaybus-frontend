// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB1xMxjjbnGZlXE1Bt3qBAJ3p5r1TqMog",
  authDomain: "blaybus-be1bd.firebaseapp.com",
  projectId: "blaybus-be1bd",
  storageBucket: "blaybus-be1bd.firebasestorage.app",
  messagingSenderId: "489607528178",
  appId: "1:489607528178:web:99b4a5b9a0c95301411a6b",
  measurementId: "G-KW3KTEJGLS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
