import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';
import { async } from 'q';


const config={
    apiKey: "AIzaSyCinRwPDdqSyRhCuxl11cWXXrHHbUdidV4",
    authDomain: "miren-suits.firebaseapp.com",
    databaseURL: "https://miren-suits.firebaseio.com",
    projectId: "miren-suits",
    storageBucket: "",
    messagingSenderId: "672648672014",
    appId: "1:672648672014:web:22131a3c76ef7758"
  };


  //storing data into firestore database
  export const createUserProfileDocument= async (userAuth,additionalData)=>{
        //Only saves to database when user has been authenticated
        if (!userAuth)return;
        const userRef=firestore.doc(`users/${userAuth.uid}`);
        const snapShot=await userRef.get();

        //Checks if snapshot exists in database and if not creates user
        if (!snapShot.exists){
            const {displayName,email}=userAuth;
            const createdAt=new Date();


            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }catch(error){
                console.log('error creating user',error.message);
            }
        }

        return userRef;


  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();

  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;