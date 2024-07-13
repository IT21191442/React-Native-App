import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbo8BBD0I8SRrp9gTEzV8MVLFFyEiSzlQ",
    authDomain: "add-project-c8d80.firebaseapp.com",
    projectId: "add-project-c8d80",
    storageBucket: "add-project-c8d80.appspot.com",
    messagingSenderId: "286224281915",
    appId: "1:286224281915:web:66f76f1a1b310aea37471e",
    measurementId: "G-Y5JPS861MV"
  };

const app = initializeApp(firebaseConfig);

export { auth, firestore };