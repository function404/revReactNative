import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-F5PAm4bneW3qUx5t2bxQtD1n6Fnv0iA',
  authDomain: 'maca-9843d.firebaseapp.com',
  projectId: 'maca-9843d',
  storageBucket: 'maca-9843d.appspot.com',
  messagingSenderId: '861484391841',
  appId: '1:861484391841:web:0e1886788a3e93180bffe0'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };