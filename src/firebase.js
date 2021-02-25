import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhBx0bF8Ai0P83J75mL-bKFdTT1iUs-Lk",
  authDomain: "clone-cc356.firebaseapp.com",
  projectId: "clone-cc356",
  storageBucket: "clone-cc356.appspot.com",
  messagingSenderId: "722673452305",
  appId: "1:722673452305:web:3511aed5081f99fd8d38b0",
  measurementId: "G-JJFS2BPMVV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
