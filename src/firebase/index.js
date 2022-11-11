// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCppn3h-ZW94sbvyXbuGH5RWyAU4qaUZ3c",
  authDomain: "fir-vue-90568.firebaseapp.com",
  projectId: "fir-vue-90568",
  storageBucket: "fir-vue-90568.appspot.com",
  messagingSenderId: "644564355289",
  appId: "1:644564355289:web:403c74e2e519d9e4b056c8",
  measurementId: "G-75MZYL2G73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);