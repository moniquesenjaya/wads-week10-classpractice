import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF_S2OceIC3who7AF44UNAMZmzNMdRpy8",
  authDomain: "blog-test-16ad3.firebaseapp.com",
  projectId: "blog-test-16ad3",
  storageBucket: "blog-test-16ad3.appspot.com",
  messagingSenderId: "314432449018",
  appId: "1:314432449018:web:f9f702abf02fd3e73e9c43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
