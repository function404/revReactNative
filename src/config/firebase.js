import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAUApvSeV0hvnpgopthdvFHka6d_dZbyAY',
  authDomain: 'maca-todo-app.firebaseapp.com',
  projectId: 'maca-todo-app',
  storageBucket: 'maca-todo-app.appspot.com',
  messagingSenderId: '789609324235',
  appId: '1:789609324235:web:3739e2f08fa517f807054e'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };