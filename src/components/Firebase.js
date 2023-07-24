import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU0utVaUHDzLQBakSGt2jNqVtHeQ67DB4",
  authDomain: "smarttracker-ed79c.firebaseapp.com",
  projectId: "smarttracker-ed79c",
  storageBucket: "smarttracker-ed79c.appspot.com",
  messagingSenderId: "184351928524",
  appId: "1:184351928524:web:ccc129d18fd9fde4069269",
  measurementId: "G-6CYEFP4Z10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;