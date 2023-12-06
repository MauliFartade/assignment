
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLMic8odGh1Dvj2-yZc3G5sVSEJeolrrw",
  authDomain: "news-app-77657.firebaseapp.com",
  projectId: "news-app-77657",
  storageBucket: "news-app-77657.appspot.com",
  messagingSenderId: "905413181467",
  appId: "1:905413181467:web:93477e98fe84f46e9938be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
