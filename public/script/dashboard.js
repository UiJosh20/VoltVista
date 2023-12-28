import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1drkdZkqsxNClgB5Y2ubl2lFwIn_1-m8",
  authDomain: "voltvist.firebaseapp.com",
  projectId: "voltvist",
  storageBucket: "voltvist.appspot.com",
  messagingSenderId: "531920268915",
  appId: "1:531920268915:web:572e24d0c173efa8924406"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user, uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});