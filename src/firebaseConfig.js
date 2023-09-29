// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK6jAbPN3xnP8PVwZ9ErrCWmpa_OAXPNQ",
  authDomain: "portaluoh.firebaseapp.com",
  projectId: "portaluoh",
  storageBucket: "portaluoh.appspot.com",
  messagingSenderId: "32094259969",
  appId: "1:32094259969:web:84d484f6c67e510748a900",
  measurementId: "G-D5BK7B6BNF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);