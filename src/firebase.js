import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "learn-typescript-26486.firebaseapp.com",
  projectId: "learn-typescript-26486",
  storageBucket: "learn-typescript-26486.appspot.com",
  messagingSenderId: "202066094188",
  appId: "1:202066094188:web:4ea5208fdcff63582b5049",
  measurementId: "G-W5V077TWHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
