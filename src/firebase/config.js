
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcDQxUy-hOJYAqk3xPzaJL_LemPBJPwuQ",
  authDomain: "miniblog-c322f.firebaseapp.com",
  projectId: "miniblog-c322f",
  storageBucket: "miniblog-c322f.appspot.com",
  messagingSenderId: "751714543986",
  appId: "1:751714543986:web:eaf29f633ec453c4f595eb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };