import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGacjCcjPiN_G6X4vQFR94XZOf-Matc2k",
  authDomain: "todo-8cd65.firebaseapp.com",
  databaseURL: "https://todo-8cd65.firebaseio.com",
  projectId: "todo-8cd65",
  storageBucket: "todo-8cd65.appspot.com",
  messagingSenderId: "526416974240",
  appId: "1:526416974240:web:d4314ca5f65fdd05d914c5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
