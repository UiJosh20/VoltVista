// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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
const provider = new GoogleAuthProvider();
const facebookLogin = new FacebookAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

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
      // if (errorCode == "auth/account-exists-with-different-credential") {
      //   showerr.innerHTML = `<p class="alert alert-danger">Ein Benutzer ist bereits mit dieser E-Mail angemeldet</p>`;
      //   setTimeout(() => {
      //     showerr.style.display = "none";
      //   }, 3000);
      // } else if (errorCode == "auth/internal-error") {
      //   showerr.innerHTML = `<p class="alert alert-warning">Sie sind nicht mit dem Internet verbunden</p>`;
      //   setTimeout(() => {
      //     showerr.style.display = "none";
      //   }, 3000);
      // }
    });
};
window.googleSignin = googleSignin;



const facebookSignin = () =>{
  signInWithPopup(auth, facebookLogin)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    console.log(user);
    console.log(accessToken);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}

window.facebookSignin = facebookSignin


const appleSignin = () =>{
  signInWithPopup(auth, appleProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // Apple credential
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The credential that was used.
    const credential = OAuthProvider.credentialFromError(error);
    console.log(credential);

    // ...
  });
}

window.appleSignin = appleSignin

const signinEmail = () => {
  let email = yourEmail.value;
  let password = yourPass.value;
  yourEmail.value = "";
  yourPass.value = "";
  if (email == "" || password == "") {
    showerr.innerHTML = `<p class="alert alert-danger text-center">Email and password must be filled</p>`;
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







