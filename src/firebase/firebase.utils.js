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

export const CreateUserProfileDocument = async (userAuth, AdditionalData) =>{
  if (!userAuth) return;

  const UserRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await UserRef.get()

  console.log(snapShot)

  if(!snapShot.exists){
    
    const {displayName,email} = userAuth
    const CreatedAt = new Date()

    try {
      await UserRef.set(
        {displayName,
        email,
        CreatedAt,
        ...AdditionalData}
      )
    } catch (error){
      console.log("error at creation", error.message)
    }
    
  }

  return UserRef;
}


firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

 
