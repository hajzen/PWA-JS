// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtlwrBLqTav12LWVSzZWV5g-3IycsWf8E",
  authDomain: "cat-memes-notifications.firebaseapp.com",
  projectId: "cat-memes-notifications",
  storageBucket: "cat-memes-notifications.firebasestorage.app",
  messagingSenderId: "981812104221",
  appId: "1:981812104221:web:8a514ad015d4a5dbe0caf4",
  measurementId: "G-JB895G6LR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);