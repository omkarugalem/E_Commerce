import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGSvP1zXtYQOqsd4MQFqBmmC7rN5UoJr8",
  authDomain: "e-com-b014e.firebaseapp.com",
  projectId: "e-com-b014e",
  storageBucket: "e-com-b014e.appspot.com",
  messagingSenderId: "475545738460",
  appId: "1:475545738460:web:811d0dccb480062edde819",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
export let db = getFirestore(app);
