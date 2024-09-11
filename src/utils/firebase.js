import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLN6kt3iiAcAdkTH6Q2YC6cushAjgvNhU",
  authDomain: "netflix-project-54c16.firebaseapp.com",
  projectId: "netflix-project-54c16",
  storageBucket: "netflix-project-54c16.appspot.com",
  messagingSenderId: "814464181214",
  appId: "1:814464181214:web:f4ce8e90dabe5f8237f34f",
  measurementId: "G-PFSBYN20EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app); 