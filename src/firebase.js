// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlgkC5nD9Z2-h5ZNZ0lCdf0AUgZcld6xw",
  authDomain: "dreamalliance-bfd74.firebaseapp.com",
  projectId: "dreamalliance-bfd74",
  storageBucket: "dreamalliance-bfd74.appspot.com",
  messagingSenderId: "828179662217",
  appId: "1:828179662217:web:379cd518f9d30a954e8d58",
  measurementId: "G-T8X1T8VLED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
