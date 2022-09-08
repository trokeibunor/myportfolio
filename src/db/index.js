// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR3CIcOMOk7y3THd3wdgqrUiJdZP-hMpM",
  authDomain: "myportfolio-2c233.firebaseapp.com",
  projectId: "myportfolio-2c233",
  storageBucket: "myportfolio-2c233.appspot.com",
  messagingSenderId: "241296046812",
  appId: "1:241296046812:web:f95d2c3530e3c19cb4d219",
  measurementId: "G-DH4TVQZVJG"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();