// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsVuz-iDKq8y_JGGMXFBsD3beZiTPe2is",
  authDomain: "coffee-store-app-c7f34.firebaseapp.com",
  projectId: "coffee-store-app-c7f34",
  storageBucket: "coffee-store-app-c7f34.firebasestorage.app",
  messagingSenderId: "729450182337",
  appId: "1:729450182337:web:41d9f6dac47bdf56adc640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);