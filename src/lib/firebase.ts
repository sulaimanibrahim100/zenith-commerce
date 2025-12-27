import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqh569-vL4CzCZ0_bJ5l5D-MQmUF4C4uY",
  authDomain: "shoptest-da3cf.firebaseapp.com",
  projectId: "shoptest-da3cf",
  storageBucket: "shoptest-da3cf.firebasestorage.app",
  messagingSenderId: "1094186803165",
  appId: "1:1094186803165:web:d4b84d2e9e079f4f786034",
  measurementId: "G-QWN8YZ2LE8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;
