// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "churchofchristlawanson-8d500.firebaseapp.com",
  projectId: "churchofchristlawanson-8d500",
  storageBucket: "churchofchristlawanson-8d500.appspot.com",
  messagingSenderId: "408633385971",
  appId: "1:408633385971:web:274085881eb4d1bf022886",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
