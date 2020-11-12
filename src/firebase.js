import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTxSzczghL1taFkfG4idLVqhsm8MGI_Wg",
  authDomain: "clone-55644.firebaseapp.com",
  databaseURL: "https://clone-55644.firebaseio.com",
  projectId: "clone-55644",
  storageBucket: "clone-55644.appspot.com",
  messagingSenderId: "588335177004",
  appId: "1:588335177004:web:f8be2d3760da146d7ae089",
  measurementId: "G-ZL1KTYVN9M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
