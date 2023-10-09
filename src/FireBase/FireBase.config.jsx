// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.vite_abc);
const firebaseConfig = {
  apiKey: "AIzaSyDkxAs1qp9WAXesCyJPTt5vHstZbFYj5rI",
  authDomain: "b8a9-phevent.firebaseapp.com",
  projectId: "b8a9-phevent",
  storageBucket: "b8a9-phevent.appspot.com",
  messagingSenderId: "705288463097",
  appId: "1:705288463097:web:fe01af74d9545785d4b828",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
