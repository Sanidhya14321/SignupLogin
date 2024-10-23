// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaK9eAQpbr8StzG5H3r54D0Ww4ElcM3No",
  authDomain: "authentication-1a4a5.firebaseapp.com",
  projectId: "authentication-1a4a5",
  storageBucket: "authentication-1a4a5.appspot.com",
  messagingSenderId: "310350908936",
  appId: "1:310350908936:web:2101ca27c6867a5b450bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {auth}
export {app}