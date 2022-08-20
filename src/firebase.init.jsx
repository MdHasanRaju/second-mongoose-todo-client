
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXu5nqYJkonGdFHr37ru3t1qOT95qr43g",
  authDomain: "to-do-app-2022-e0b5a.firebaseapp.com",
  projectId: "to-do-app-2022-e0b5a",
  storageBucket: "to-do-app-2022-e0b5a.appspot.com",
  messagingSenderId: "421230098558",
  appId: "1:421230098558:web:afd423db02725b2012802f",
  measurementId: "G-8FMNWHVK4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
