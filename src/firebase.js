import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDDigI22FwiSnJ0NJwzh0O2KqS4CdxYN9k",
    authDomain: "auth-development-b8a63.firebaseapp.com",
    projectId: "auth-development-b8a63",
    storageBucket: "auth-development-b8a63.appspot.com",
    messagingSenderId: "986699636323",
    appId: "1:986699636323:web:e0b556041ee38857d5a256"
  };

  const app = initializeApp(firebaseConfig);
  // export const provider =new firebaseConfig.auth.GoogleAuthprovider()
  export const auth = getAuth(app);
  export default app;