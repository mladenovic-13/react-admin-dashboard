// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { IOrder, IProduct, IUser } from "./shared/types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "admin-dashboard-de6f9.firebaseapp.com",
  projectId: "admin-dashboard-de6f9",
  storageBucket: "admin-dashboard-de6f9.appspot.com",
  messagingSenderId: "314631918781",
  appId: "1:314631918781:web:d8542ada26509bfbbad3d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const usersCollection = createCollection<IUser>("users");
export const productsCollection = createCollection<IProduct>("products");
export const ordersCollection = createCollection<IOrder>("orders");

// Initialize Auth
export const auth = getAuth();

// Initialize Auth
export const storage = getStorage();
