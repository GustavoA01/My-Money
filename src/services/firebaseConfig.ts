// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsojvQu5JV6S2-4wY_Ft7zPmS1SomJHqE",
  authDomain: "my-money-2f1b4.firebaseapp.com",
  projectId: "my-money-2f1b4",
  storageBucket: "my-money-2f1b4.firebasestorage.app",
  messagingSenderId: "661959101265",
  appId: "1:661959101265:web:35835b9c4688d68afb2170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)