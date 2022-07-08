import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAwecXecvC7eE6sUUGdHff4Pcd7DKoxv-g",
    authDomain: "clone-80f0c.firebaseapp.com",
    projectId: "clone-80f0c",
    storageBucket: "clone-80f0c.appspot.com",
    messagingSenderId: "268884594055",
    appId: "1:268884594055:web:4d5410488158f975099722",
    measurementId: "G-C9YDXS7L6R"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };