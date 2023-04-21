// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXiYuOxTdjtAQy5arXl87_EfYxYZqwS1Q",
  authDomain: "react-firebase-5f690.firebaseapp.com",
  projectId: "react-firebase-5f690",
  storageBucket: "react-firebase-5f690.appspot.com",
  messagingSenderId: "1039903992356",
  appId: "1:1039903992356:web:dcabb1f8950b1f7e7bc6b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
