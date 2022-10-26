// Import the functions you need from the SDKs you need
//rimport { initializeApp } from "firebase";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD272K9bn7aDembpvDAkNXF7gQOHEUvS5s",
    authDomain: "fir-auth-a3f09.firebaseapp.com",
    projectId: "fir-auth-a3f09",
    storageBucket: "fir-auth-a3f09.appspot.com",
    messagingSenderId: "654669559892",
    appId: "1:654669559892:web:84d1fdcb3b0125906d95c1"
  };
  
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  export const authentication =getAuth(app);