// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "",
  authDomain: "moviedetailsfb.firebaseapp.com",
  projectId: "moviedetailsfb",
  storageBucket: "moviedetailsfb.appspot.com",
  messagingSenderId: "1037421821646",
  appId: "1:1037421821646:web:7f9d5ed325bd868c6fda9f",
  measurementId: "G-Z31GMKTQFL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Crear un objeto que contenga la instancia de la aplicación
const firebaseInstance = {
  app,
  analytics,
  auth 
};

export default firebaseInstance;
