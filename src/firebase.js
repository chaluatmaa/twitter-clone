import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByahJpcUnrB4dzxT4bLR_eLlYkGN4bkvo",
  authDomain: "twitter-clone-b2d68.firebaseapp.com",
  databaseURL: "https://twitter-clone-b2d68.firebaseio.com",
  projectId: "twitter-clone-b2d68",
  storageBucket: "twitter-clone-b2d68.appspot.com",
  messagingSenderId: "609998604639",
  appId: "1:609998604639:web:d690e5935a1f26a0a54eea",
  measurementId: "G-1FY8YMGV9B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
