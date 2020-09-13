import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMjSoq8ieNJhT47OrNqLSAvjO_L7gznTc",
  authDomain: "new-modern-machine.firebaseapp.com",
  databaseURL: "https://new-modern-machine.firebaseio.com",
  projectId: "new-modern-machine",
  storageBucket: "new-modern-machine.appspot.com",
  messagingSenderId: "311450151507",
  appId: "1:311450151507:web:b6f8ec9292f1a8d037f4a6",
  measurementId: "G-X3L1L32Q04",
};

const firebasApp = firebase.initializeApp(firebaseConfig);
const db = firebasApp.firestore();
const auth = firebase.auth();

export { db, auth };
