// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWb0Yx4ui9LKy7BHHSG3Fe91KNK1kDWwM",
  authDomain: "bakbanke.firebaseapp.com",
  projectId: "bakbanke",
  storageBucket: "bakbanke.appspot.com",
  messagingSenderId: "830607743484",
  appId: "1:830607743484:web:f4162130879287b40c3a79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleSignin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      if (user) {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Verification email sent!");
        });
        window.location.href = "dashboard.html";
      } else {
        window.location.href = "index.html";
      }
    })
    .catch((error) => {
      let errorCode = error.code;
      console.log(errorCode);
      if (errorCode == "auth/account-exists-with-different-credential") {
        showerr.innerHTML = `<p class="alert alert-danger">Ein Benutzer ist bereits mit dieser E-Mail angemeldet</p>`;
        setTimeout(() => {
          showerr.style.display = "none";
        }, 3000);
      } else if (errorCode == "auth/internal-error") {
        showerr.innerHTML = `<p class="alert alert-warning">Sie sind nicht mit dem Internet verbunden</p>`;
        setTimeout(() => {
          showerr.style.display = "none";
        }, 3000);
      }
    });
};
window.googleSignin = googleSignin;

const signinEmail = () => {
  let email = yourEmail.value;
  let password = yourPass.value;
  yourEmail.value = "";
  yourPass.value = "";
  if (email == "" || password == "") {
    showerr.innerHTML = `<p class="alert alert-danger text-center">E-Mail und Passwort dürfen nicht leer bleiben</p>`;
    setTimeout(() => {
      showerr.style.display = "none";
    }, 4000);
  }
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      let errorCode = error.code;
      console.log(errorCode);
      if (errorCode == "auth/invalid-login-credentials") {
        showerr.innerHTML = `<p class="alert alert-danger text-center"> Sie haben eine ungültige E-Mail-Adresse und ein ungültiges Passwort eingegeben</p>`;
        setTimeout(() => {
          showerr.style.display = "none";
        }, 4000);
      } else if (
        errorCode == "auth/internal-error" ||
        errorCode == "auth/network-request-failed"
      ) {
        showerr.innerHTML = `<p class="alert alert-warning text-center">Sie sind nicht mit dem Internet verbunden</p>`;
        setTimeout(() => {
          showerr.style.display = "none";
        }, 4000);
      }
    });
};

window.signinEmail = signinEmail;

const btnAll = () => {
  let email = yourOEmail.value;
  let password = yourOPass.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = "index.html";
    })
    .catch((error) => {
      let errorCode = error.code;
      console.log(errorCode);
      if (errorCode == "auth/email-already-in-use") {
        showerr.innerHTML = `<p class="alert alert-danger text-center">Diese E-Mail existiert bereits</p>`;
        setTimeout(() => {
          showerr.style.display = "none";
        }, 4000);
      } else if (errorCode == "auth/invalid-email") {
        showerr.innerHTML = `<p class="alert alert-danger text-center">E-Mail und Passwort dürfen nicht leer sein</p>`;
        setTimeout(() => {
          showerr.style.display = "none";
        }, 4000);
      } else {
        yourOEmail.value = "";
        yourOPass.value = "";
      }
    });
};

window.btnAll = btnAll;
