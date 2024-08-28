import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyABO8ZVq9ZR7b3LvOF4YrXH7NkpZgNWCSI",
    authDomain: "physician-b5d20.firebaseapp.com",
    projectId: "physician-b5d20",
    storageBucket: "physician-b5d20.appspot.com",
    messagingSenderId: "359949250841",
    appId: "1:359949250841:web:cb9c603415d5e808205588",
    measurementId: "G-3Q4JLJR2MJ"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };