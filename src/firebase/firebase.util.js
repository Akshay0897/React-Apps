import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBN2PWrpZ7g3ZSTz2nhpW6Bvg5YAKv7_dI",
    authDomain: "chat-app-javascript.firebaseapp.com",
    databaseURL: "https://chat-app-javascript.firebaseio.com",
    projectId: "chat-app-javascript",
    storageBucket: "chat-app-javascript.appspot.com",
    messagingSenderId: "728552808806",
    appId: "1:728552808806:web:eaa53e998a446ef6"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  

  const provider  = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.collection('Users').doc(`${userAuth.uid}`);
      console.log(userRef);
      const snapShopt = await userRef.get();
      if(!snapShopt.exists)
      {
          const {displayName, email} = userAuth;
          const createdAt = new Date();
        //  console.log(displayName,email)
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        }).then(console.log('successfully created firebase user')).catch((err) => {console.log(err)})
    }
      //console.log(snapShopt); 
    return userRef;
  } 

  export default firebase;
