// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5LxdjGqhpZ_hcw2nsLjsAvzQbIiL0MGw",
  authDomain: "vite-contact-133d7.firebaseapp.com",
  projectId: "vite-contact-133d7",
  storageBucket: "vite-contact-133d7.appspot.com",
  messagingSenderId: "859363900932",
  appId: "1:859363900932:web:829a538e387d7091713f51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);