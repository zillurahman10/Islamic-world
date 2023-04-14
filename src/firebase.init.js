// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOHKbnXf1kHpBj8Ef3HVubZjs2ZZzA1vA",
    authDomain: "islamicworld-bd.firebaseapp.com",
    projectId: "islamicworld-bd",
    storageBucket: "islamicworld-bd.appspot.com",
    messagingSenderId: "651510848647",
    appId: "1:651510848647:web:1f4828d11e74d3dd39ec22",
    measurementId: "G-3DWF0499G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;