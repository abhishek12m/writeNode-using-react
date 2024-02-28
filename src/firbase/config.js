import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyApjJr5pbmCl34MaUlMdPEULVT66llfB0w",
    authDomain: "writenode-7645f.firebaseapp.com",
    projectId: "writenode-7645f",
    storageBucket: "writenode-7645f.appspot.com",
    messagingSenderId: "749957205227",
    appId: "1:749957205227:web:6a8108085c8070117442ae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();