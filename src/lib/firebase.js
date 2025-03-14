// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-Zmgn_AWyd3tBaYTvrLnLgqAPQi_kjMs',
  authDomain: 'paisasync.firebaseapp.com',
  projectId: 'paisasync',
  storageBucket: 'paisasync.firebasestorage.app',
  messagingSenderId: '761369882361',
  appId: '1:761369882361:web:f3dda4db5729c886697c28',
  measurementId: 'G-0R7ZREZZ8S',
};
// Initialize Firebase only if it hasn't been initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
