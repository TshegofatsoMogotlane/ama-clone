import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdVhH3Jx8iDZnPDL7GYx0LLvIw0KqyZB4",
    authDomain: "clone-af3a0.firebaseapp.com",
    projectId: "clone-af3a0",
    storageBucket: "clone-af3a0.appspot.com",
    messagingSenderId: "1005178543494",
    appId: "1:1005178543494:web:cfd3256ca8839bc82ca007",
    measurementId: "G-ZNKKV75KSV",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth }
  