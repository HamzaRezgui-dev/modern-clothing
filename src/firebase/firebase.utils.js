import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD2NfiTnhbVntkKv0efdCJmTvWtqpLDGhk",
    authDomain: "modern-db-592aa.firebaseapp.com",
    projectId: "modern-db-592aa",
    storageBucket: "modern-db-592aa.appspot.com",
    messagingSenderId: "516131085985",
    appId: "1:516131085985:web:6ee579a2a3230f0b995ae0"
  }

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

 
