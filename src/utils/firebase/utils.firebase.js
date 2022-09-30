import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeBwwphBH0aGS1x-t6e3qSA1vgXeYHv0E",
  authDomain: "clapstone-db.firebaseapp.com",
  projectId: "clapstone-db",
  storageBucket: "clapstone-db.appspot.com",
  messagingSenderId: "429495153594",
  appId: "1:429495153594:web:16353519cfdb864e706383",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (authUser) => {
  if (!authUser) return;
  const userDocRef = doc(db, "users", authUser.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("something went wrong!");
      console.error(err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const authListenerHandler = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollection = async (collectionKey, productToAdd) => {
  const collectionReference = collection(db, collectionKey);
  const batch = writeBatch(db);

  productToAdd.forEach((product) => {
    const docRef = doc(
      collectionReference,
      product.title ? product.title.toLowerCase() : "none"
    );
    batch.set(docRef, product);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, "categories");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, cur) => {
    const { items, title } = cur.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
