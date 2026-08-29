import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOAa7VEgItWHej6-HFUVNJVpfwzB5hE3A",
    authDomain: "ovisoft-e5377.firebaseapp.com",
    projectId: "ovisoft-e5377",
    storageBucket: "ovisoft-e5377.firebasestorage.app",
    messagingSenderId: "950806320878",
    appId: "1:950806320878:web:ce84eca4c41a348de605ff",
    measurementId: "G-2KCFBR7NP5"
};

// Initialize Firebase (Singleton pattern to avoid multiple instances)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, facebookProvider, db };
