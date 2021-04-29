import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2CMFM96fQXf4dIx8KJNBFOeo2ho3i-3c",
  authDomain: "greenwood-db-51098.firebaseapp.com",
  projectId: "greenwood-db-51098",
  storageBucket: "greenwood-db-51098.appspot.com",
  messagingSenderId: "495980602476",
  appId: "1:495980602476:web:7cb9d89e0925fdb3a56449",
  measurementId: "G-S8SH9YX3MM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
