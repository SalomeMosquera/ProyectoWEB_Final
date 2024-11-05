// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgzTSVuN_-hNBTjZj9bG1TZ_IE-3AVnjw",
  authDomain: "loginexplorandoando.firebaseapp.com",
  projectId: "loginexplorandoando",
  storageBucket: "loginexplorandoando.firebasestorage.app",
  messagingSenderId: "809724717858",
  appId: "1:809724717858:web:ff2f44845019925e0e937b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
