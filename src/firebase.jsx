// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeZXs-CHEG4R5sYXS69P3FCZ6Ltj3o3BA",
  authDomain: "authentication-95366.firebaseapp.com",
  projectId: "authentication-95366",
  storageBucket: "authentication-95366.appspot.com",
  messagingSenderId: "655870759448",
  appId: "1:655870759448:web:bd0ef126f9b1ff8c8b696d",
  measurementId: "G-NY7CR924XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}