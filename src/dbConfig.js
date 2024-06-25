// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBbq6aiKiefhq-8dLbbAcNKZ48lCJxQckU",
  authDomain: "expense-book-dd36d.firebaseapp.com",
  databaseURL: "https://expense-book-dd36d-default-rtdb.firebaseio.com",
  projectId: "expense-book-dd36d",
  storageBucket: "expense-book-dd36d.appspot.com",
  messagingSenderId: "208753365477",
  appId: "1:208753365477:web:2bc3e94a603f4384b41f0c"
};

const app = initializeApp(firebaseConfig)

const firebaseDb = getDatabase(app);

export {firebaseDb};