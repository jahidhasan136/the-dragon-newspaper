// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdk6RWQHbHjsZiy9520PviVdyZBAXNt4M",
  authDomain: "the-dragon-newspaper.firebaseapp.com",
  projectId: "the-dragon-newspaper",
  storageBucket: "the-dragon-newspaper.appspot.com",
  messagingSenderId: "949954059238",
  appId: "1:949954059238:web:b475282dcfc1f18eb2d427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app