import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXTq7yGDq-v-jfJqzsbQGdlB2UIB363vw",
  authDomain: "crudvue-2f1b4.firebaseapp.com",
  projectId: "crudvue-2f1b4",
  storageBucket: "crudvue-2f1b4.appspot.com",
  messagingSenderId: "880204287046",
  appId: "1:880204287046:web:c545eaa463313ef66cce47",
  measurementId: "G-RXDNCZ6TGY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore();