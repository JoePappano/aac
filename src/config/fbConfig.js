import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCrvjNviV1w3IKLJVZJ3gdfzbTfeudlS8s",
    authDomain: "aacdog-4cf2a.firebaseapp.com",
    databaseURL: "https://aacdog-4cf2a.firebaseio.com",
    projectId: "aacdog-4cf2a",
    storageBucket: "",
    messagingSenderId: "972744620161",
    appId: "1:972744620161:web:760c576d4352dc43"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({})

  export default firebase;