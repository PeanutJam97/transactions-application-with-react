import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB2TB_WX_AFkzineYvu-rD0o0cdwYD78h8",
    authDomain: "react-863e3.firebaseapp.com",
    databaseURL: "https://react-863e3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-863e3",
    storageBucket: "react-863e3.appspot.com",
    messagingSenderId: "734046355662",
    appId: "1:734046355662:web:d9dd99badd095fd2a5509f",
    measurementId: "G-BFB4HPK1HS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
