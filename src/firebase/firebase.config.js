import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDJNe7LZDkPhfIIBv8tyhn6hwrj7PP2CCQ",
  authDomain: "carbana-project.firebaseapp.com",
  projectId: "carbana-project",
  storageBucket: "carbana-project.appspot.com",
  messagingSenderId: "90575964592",
  appId: "1:90575964592:web:05356d4cf7d9292268ae75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
