// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNikiEwB1ny9BakxS1aKQDEaO5ksxSMMw",
  authDomain: "project-edunaction.firebaseapp.com",
  projectId: "project-edunaction",
  storageBucket: "project-edunaction.appspot.com",
  messagingSenderId: "214449129517",
  appId: "1:214449129517:web:fe2b8b62cf2aae359390a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);