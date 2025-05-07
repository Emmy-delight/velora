// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";
import  { getStorage }  from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "velora-908d6.firebaseapp.com",
  projectId: "velora-908d6",
  storageBucket: "velora-908d6.firebasestorage.app",
  messagingSenderId: "153855988594",
  appId: "1:153855988594:web:2484d905f15836bb24c3eb"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
// const storage = getStorage(app);


export {db }