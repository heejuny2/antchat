// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD80TYTsIfaBlzUYWO2P49arbLXssQU5cI",
  authDomain: "ant-chat-f3be8.firebaseapp.com",
  projectId: "ant-chat-f3be8",
  storageBucket: "ant-chat-f3be8.appspot.com",
  messagingSenderId: "527696952133",
  appId: "1:527696952133:web:15efc0213d8e4002f65c2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()