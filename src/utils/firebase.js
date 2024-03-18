// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc31Q0qiTFveHF_f-JempSw2CCbV_QfkQ",
  authDomain: "bigbull-38db3.firebaseapp.com",
  projectId: "bigbull-38db3",
  storageBucket: "bigbull-38db3.appspot.com",
  messagingSenderId: "319668108464",
  appId: "1:319668108464:web:20b3fd004ef59b34fc8f75",
  measurementId: "G-CQNDEPCLDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
