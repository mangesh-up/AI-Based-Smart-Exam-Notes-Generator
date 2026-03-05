
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-6fd21.firebaseapp.com",
  projectId: "examnotesai-6fd21",
  storageBucket: "examnotesai-6fd21.firebasestorage.app",
  messagingSenderId: "776664679762",
  appId: "1:776664679762:web:3f983c9aeeed6dd1c7e68b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}