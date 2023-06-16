// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Wz7yAxWd3OP0IocKPGviVe7I6ZE6hJk",
  authDomain: "rs-sport-camp.firebaseapp.com",
  projectId: "rs-sport-camp",
  storageBucket: "rs-sport-camp.appspot.com",
  messagingSenderId: "941389663231",
  appId: "1:941389663231:web:f8ebce4334378d7028b5ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;