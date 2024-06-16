 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAUnAhiOPU72MgDGhxXRkoJB-xlDHpOX9g",
  authDomain: "react-netflix-clone-c248f.firebaseapp.com",
  projectId: "react-netflix-clone-c248f",
  storageBucket: "react-netflix-clone-c248f.appspot.com",
  messagingSenderId: "240834752300",
  appId: "1:240834752300:web:377598673bfde55bb58689",
  measurementId: "G-5MKPHCBD85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
