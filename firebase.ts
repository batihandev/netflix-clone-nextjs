import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nextflix-clone-nextjs.firebaseapp.com",
  projectId: "nextflix-clone-nextjs",
  storageBucket: "nextflix-clone-nextjs.appspot.com",
  messagingSenderId: process.env.FIREBASE_MID,
  appId: process.env.FIREBASE_AID,
};

// Initialize Firebase

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp(undefined);
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
