import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYdMevBYDKVSq4IHj70CrQn-9YPvfePIE",
  authDomain: "health-welfare-usc.firebaseapp.com",
  projectId: "health-welfare-usc",
  storageBucket: "health-welfare-usc.appspot.com",
  messagingSenderId: "76547634529",
  appId: "1:76547634529:web:8fe54ba82a8a2717df4120",
};

const appFirebase = firebase.initializeApp(firebaseConfig);
export default appFirebase;
