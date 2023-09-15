import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBttkopLCtozN57ruAmUXuH_F4OhCk8sEw",
  authDomain: "recyclerview-cdfa2.firebaseapp.com",
  databaseURL: "https://recyclerview-cdfa2.firebaseio.com",
  projectId: "recyclerview-cdfa2",
  storageBucket: "recyclerview-cdfa2.appspot.com",
  messagingSenderId: "22237108991",
  appId: "1:22237108991:web:6063fc6d5c5446e3624aca",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {
  app,
  db,
  auth,
  collection,
  setDoc,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
};
