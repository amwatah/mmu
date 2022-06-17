// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx1s85KcVa-uBV16JGhtowCdabuXLz5f8",
  authDomain: "mmu-hub-448e2.firebaseapp.com",
  projectId: "mmu-hub-448e2",
  storageBucket: "mmu-hub-448e2.appspot.com",
  messagingSenderId: "749423493513",
  appId: "1:749423493513:web:c62d8af1576d44e524e158",
  measurementId: "G-E6NSZXH0QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
