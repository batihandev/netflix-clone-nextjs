import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth"; // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "nextflix-clone-nextjs.firebaseapp.com",
  projectId: "nextflix-clone-nextjs",
  storageBucket: "nextflix-clone-nextjs.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MID,
  appId: process.env.NEXT_PUBLIC_FIRABASE_AID,
};

// Initialize Firebase
console.log(firebaseConfig.apiKey, "api keys");
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp(undefined);
const db = getFirestore(app);
const auth = getAuth(app);

export default app;
export { auth, db };
