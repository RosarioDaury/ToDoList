import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBSPVnZ0gMlHBXN4C18TrREGAwmivlPNz4",
    authDomain: "todolist-900af.firebaseapp.com",
    projectId: "todolist-900af",
    storageBucket: "todolist-900af.appspot.com",
    messagingSenderId: "809975783027",
    appId: "1:809975783027:web:7082726f3108b5ccf01406"
};

firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore();
