// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIxLicspQbaOmZqKOwCBa3atsj0WzxhLk",
  authDomain: "lista-de-tareas-827d5.firebaseapp.com",
  projectId: "lista-de-tareas-827d5",
  storageBucket: "lista-de-tareas-827d5.appspot.com",
  messagingSenderId: "808622516945",
  appId: "1:808622516945:web:efd61293440cc047b0f3f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataTaskList = getFirestore();