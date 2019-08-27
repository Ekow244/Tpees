import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';


const config={
    apiKey: "AIzaSyCinRwPDdqSyRhCuxl11cWXXrHHbUdidV4",
    authDomain: "miren-suits.firebaseapp.com",
    databaseURL: "https://miren-suits.firebaseio.com",
    projectId: "miren-suits",
    storageBucket: "",
    messagingSenderId: "672648672014",
    appId: "1:672648672014:web:22131a3c76ef7758"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();

  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;