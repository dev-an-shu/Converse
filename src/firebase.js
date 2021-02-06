import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
    apiKey: "AIzaSyBW20ziGd0z18rAw2pa7g_TEtxYsltzH5s",
    authDomain: "converse-3f061.firebaseapp.com",
    databaseURL: "https://converse-3f061-default-rtdb.firebaseio.com",
    projectId: "converse-3f061",
    storageBucket: "converse-3f061.appspot.com",
    messagingSenderId: "567426932734",
    appId: "1:567426932734:web:d53ef73b82014f3d9eaaaf",
    measurementId: "G-RQKXZ4TZ7M"
  });

  const auth = firebase.auth();

  export default auth;