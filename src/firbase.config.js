import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Pz92lDVrJCikyKfv5pS0y9tcQn6umc8",
  authDomain: "house-marketplace-b2df2.firebaseapp.com",
  projectId: "house-marketplace-b2df2",
  storageBucket: "house-marketplace-b2df2.appspot.com",
  messagingSenderId: "219756989193",
  appId: "1:219756989193:web:0cfeadf5f4d0bd7593e1d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();