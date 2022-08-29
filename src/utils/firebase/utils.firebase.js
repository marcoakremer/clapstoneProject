import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBeBwwphBH0aGS1x-t6e3qSA1vgXeYHv0E",
    authDomain: "clapstone-db.firebaseapp.com",
    projectId: "clapstone-db",
    storageBucket: "clapstone-db.appspot.com",
    messagingSenderId: "429495153594",
    appId: "1:429495153594:web:16353519cfdb864e706383"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account' 
})

export const auth = getAuth(firebaseApp)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (authUser) => {
    const userDocRef = doc(db, 'users', authUser.uid)

    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()) {
        const { displayName, email } = authUser
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            })
        } catch (err) {
            console.log('something went wrong!');
            console.error(err.message);
        }
    }
    return userDocRef;
}