// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Sets up the firebase config, importing the API key from env
const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "mtm6404-contact-book-rout0052.firebaseapp.com",

  projectId: "mtm6404-contact-book-rout0052",

  storageBucket: "mtm6404-contact-book-rout0052.firebasestorage.app",

  messagingSenderId: "937928181687",

  appId: "1:937928181687:web:9bc6a23fdba72b52574a32"

};

// Sets up the app using the config
const app = initializeApp(firebaseConfig);

// Stores the getFirestore to pull the db records from
const db = getFirestore(app);

export default db;