import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfSAN4DF7dqJy5tTHWyh4978nUwvtWcqs",
  authDomain: "olx-clone-react-12fa3.firebaseapp.com",
  projectId: "olx-clone-react-12fa3",
  storageBucket: "olx-clone-react-12fa3.appspot.com",
  messagingSenderId: "143920085741",
  appId: "1:143920085741:web:b3f29b6755c9933e802ae4",
  measurementId: "G-ZKNPX53P5W"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage = getStorage(app);