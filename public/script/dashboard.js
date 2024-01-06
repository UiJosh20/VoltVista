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
    let profilePhoto = user.photoURL
    let userName = user.displayName
    let emailAd = user.email
    let firstName = userName.split(' ')[0];
    let lastName = userName.split(' ')[1];
  
    displayMeterNumber()
    displayProfile.innerHTML = `
    <img src=${profilePhoto} width="40" height="40"/>
    `
    displayProfile1.innerHTML = `
    <img src=${profilePhoto} width="30" height="30" style="border-radius:100%;"/>
    `
    displayUsername.innerHTML = `
    Hi ${firstName}, welcome back
    `
    profileFirst.innerText = `
      ${firstName}
    `
    profileLast.innerText = `
      ${lastName}
    `
    emailProfile.innerText=`
      ${emailAd}
    `
    const userPhone = user.phoneNumber ? user.phoneNumber : '---';
    phoneProfile.innerText = `
    ${userPhone}
    `
  } else {
   window.location.href = "index.html"
  }
});


const apiKey = '844366e79376460f9c6a0f3343ecaea9';
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            // Extracting address components
            const {country, state} = data.results[0].components
            console.log(`Country: ${country}`);
            console.log(`State: ${state}`);
            console.log(data);
            displayNationality.innerText =  `
             ${country}n
            `
            displayAddress.innerText =  `
             ${state}
            `
            displayNation.innerText =  `
             ${country}
            `

          })
          .catch(error => console.error('Error:', error));
      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}
window.getCurrentLocation = getCurrentLocation
// Call the function to get current coordinates and fetch location details
getCurrentLocation();


