// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJxQX1SSFXaDfzlSn0bUcz2P6Jkmg9E1s",
  authDomain: "painting-house-6de84.firebaseapp.com",
  projectId: "painting-house-6de84",
  storageBucket: "painting-house-6de84.appspot.com",
  messagingSenderId: "290497868138",
  appId: "1:290497868138:web:e6b88babf71e0afd113513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth