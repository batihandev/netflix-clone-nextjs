import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9qUkz3chGyR1r8hMqBcJeimO5Z3c5lJk",
  authDomain: "nextflix-clone-nextjs.firebaseapp.com",
  projectId: "nextflix-clone-nextjs",
  storageBucket: "nextflix-clone-nextjs.appspot.com",
  messagingSenderId: "241424584476",
  appId: "1:241424584476:web:e192a72151073ba58674d9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
