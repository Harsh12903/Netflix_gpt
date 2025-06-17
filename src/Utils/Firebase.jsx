// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKXIyzXnUSx_utyXfRps7Qyix-oLiKeiw",
  authDomain: "netflixgpt-545f2.firebaseapp.com",
  projectId: "netflixgpt-545f2",
  storageBucket: "netflixgpt-545f2.appspot.com",
  messagingSenderId: "575204819915",
  appId: "1:575204819915:web:5b0248fcbf241f9d4c2c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();