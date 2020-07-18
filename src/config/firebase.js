import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCpjf1KZW-SZu5QOOCgloLIvV0x-y8cbWI",
    authDomain: "eclinic-283010.firebaseapp.com",
    databaseURL: "https://eclinic-283010.firebaseio.com",
    projectId: "eclinic-283010",
    storageBucket: "eclinic-283010.appspot.com",
    messagingSenderId: "541374752269",
    appId: "1:541374752269:web:c8c3cdbc8198e22c46d744",
    measurementId: "G-EX92975GLM"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;