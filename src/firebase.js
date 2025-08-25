import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvbh3EKwVh7S6xW1QcA5Sjmvn3ftpphKc",
  authDomain: "portfoliobelyabdelilah.firebaseapp.com",
  projectId: "portfoliobelyabdelilah",
  storageBucket: "portfoliobelyabdelilah.firebasestorage.app",
  messagingSenderId: "721948121858",
  appId: "1:721948121858:web:fb2f8e06ca4f7bb16e801b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };