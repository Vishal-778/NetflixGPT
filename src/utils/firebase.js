// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-M_ZObSICHFvU7tyAt47GQyzEN3f9s5U",
  authDomain: "netflixgpt-4add6.firebaseapp.com",
  projectId: "netflixgpt-4add6",
  storageBucket: "netflixgpt-4add6.firebasestorage.app",
  messagingSenderId: "612803239798",
  appId: "1:612803239798:web:a363c2d6fcc2b0d9a46457",
  measurementId: "G-EEX8PMR60J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();