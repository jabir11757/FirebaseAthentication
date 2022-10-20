// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0Lf5Xg7kONWmiwxJwT2HwWdpV52r5s3c",
    authDomain: "email-password-auth-e995c.firebaseapp.com",
    projectId: "email-password-auth-e995c",
    storageBucket: "email-password-auth-e995c.appspot.com",
    messagingSenderId: "500136172178",
    appId: "1:500136172178:web:dbedc1fabf6836030a244b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app