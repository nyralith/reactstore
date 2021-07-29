import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8iNzS4JsAOMciHQ9yaBEQ6A1jE-XpAs0",
    authDomain: "reactstore-168f1.firebaseapp.com",
    projectId: "reactstore-168f1",
    storageBucket: "reactstore-168f1.appspot.com",
    messagingSenderId: "1043826566778",
    appId: "1:1043826566778:web:a35b356223ca41ab72bdc3",
    measurementId: "G-49F7VGBS24"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;