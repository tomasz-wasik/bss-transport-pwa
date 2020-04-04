import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBgG18spCyw-pZB2tuEgNthsbqNlxFGeUI",
    authDomain: "bss-transport-pwa.firebaseapp.com",
    databaseURL: "https://bss-transport-pwa.firebaseio.com",
    projectId: "bss-transport-pwa",
    storageBucket: "bss-transport-pwa.appspot.com",
    messagingSenderId: "960009146745",
    appId: "1:960009146745:web:493c80a99f5159b9a21fa8",
    measurementId: "G-T9R9KGL8Y5"
  });

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export const functions = firebaseApp.functions('europe-west3');