import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, get } from "firebase/database";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

// const updateAllDocuments = async () => {
//   const path = '/path/to/your/documents'; // Change this to your path
//   const newField = { createdBy: 'rpvvamsi@gmail.com' }; // Change this to your new field

//   try {
//     const updates = {};
//     const expenseRef = ref(firebaseDb, 'expenses');
//     await get(expenseRef).then((snapshot) => {
//         if (snapshot.exists()) {
//           snapshot.forEach((childSnapShot) => {
//             const key = childSnapShot.key;
//             updates[key] = {
//               ...childSnapShot.val(),
//               ...newField,
//             }
//           }) 
//         }
//     });
//     await update(expenseRef,updates)
// } catch (err) {
//     console.log(err.message)
// }
// };

// updateAllDocuments() 



export { firebaseDb, auth, googleProvider };

