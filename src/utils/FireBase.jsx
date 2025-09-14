// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyC-MyLoIlejPnwzjgvCeL96ppJOn4RZ7tk",
//   authDomain: "react-with-firebase-f5754.firebaseapp.com",
//   projectId: "react-with-firebase-f5754",
//   storageBucket: "react-with-firebase-f5754.firebasestorage.app",
//   messagingSenderId: "232646201334",
//   appId: "1:232646201334:web:89ba5ba35a38310a2641d7",
//   measurementId: "G-XY8QV5C41E"
// };
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsr6eHpjs1WICRVkBu9I0RbOq5x7SP3Lk",
  authDomain: "oussama-education.firebaseapp.com",
  projectId: "oussama-education",
  storageBucket: "oussama-education.firebasestorage.app",
  messagingSenderId: "524222470551",
  appId: "1:524222470551:web:163fe6c4e50506b2238cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};