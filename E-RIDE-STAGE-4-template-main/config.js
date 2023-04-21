import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3a9_5BZRs37AEVDt4jZcD2SQ_ZEvk2dM",
    authDomain: "class-78-homework-akul.firebaseapp.com",
    projectId: "class-78-homework-akul",
    storageBucket: "class-78-homework-akul.appspot.com",
    messagingSenderId: "901816319508",
    appId: "1:901816319508:web:289e2779f413523f7d3101"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


