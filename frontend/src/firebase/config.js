import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYjUf5rEUvu0SQdHCQvK4xVu8Pg46XRVA",
  authDomain: "bhangola-d3b58.firebaseapp.com",
  projectId: "bhangola-d3b58",
  storageBucket: "bhangola-d3b58.appspot.com",
  messagingSenderId: "843137249182",
  appId: "1:843137249182:web:ade72de160453882ee308f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
