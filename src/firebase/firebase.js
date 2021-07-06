import firebase from "firebase/app";

import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBzZ5ZCzDzY89RAqo89WLcUj0QAwVOmsk8",
  authDomain: "eindhoven-coderhouse.firebaseapp.com",
  projectId: "eindhoven-coderhouse",
  storageBucket: "eindhoven-coderhouse.appspot.com",
  messagingSenderId: "1088849446908",
  appId: "1:1088849446908:web:4b5c69bded4408f77d9479",
};

firebase.initializeApp(config);

export const db = firebase.firestore();
