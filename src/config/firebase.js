// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUApvSeV0hvnpgopthdvFHka6d_dZbyAY",
  authDomain: "maca-todo-app.firebaseapp.com",
  projectId: "maca-todo-app",
  storageBucket: "maca-todo-app.appspot.com",
  messagingSenderId: "789609324235",
  appId: "1:789609324235:web:3739e2f08fa517f807054e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getfirestore();
const auth = getAuth();

export { app, db, auth };