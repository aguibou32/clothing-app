import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDA28JPQhBTSM_w5yNM6M_sNJIMnGGTJwI",
    authDomain: "crown-db-e5755.firebaseapp.com",
    projectId: "crown-db-e5755",
    storageBucket: "crown-db-e5755.appspot.com",
    messagingSenderId: "745520322760",
    appId: "1:745520322760:web:2344264aedf28f743a2dfd",
    measurementId: "G-EZL9P1DG7F"
};

  // This function is to create a user and save it to the database
  export const createUserProfileDocument = async(userAuth, additionalData) => {
      // userAuth here is the user object we are getting back from whenever we sign in to firebase authentication

    if(!userAuth) return ; // If there is no user signedIn, we want to exist from this function, remember we have to noticed that when we are not signed in the auth library returns null

    const userRef = firestore.doc(`users/${userAuth.uid}`); // we are sending a query to firestore to check if our user exists, (the isExists attribute will return null here)

    // console.log(userRef);

    const snapShot = await userRef.get(); // the exists property on this object will be false if the user doesnt exist yet on the database 

    // console.log(snapShot); // querying the user with that id 

    if(!snapShot.exists) { // if the property exists on the object is null, we want to create it
      const {displayName, email, emailVerified} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({ // We are using the user reference to create the user 
          displayName,
          email,
          emailVerified,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user ', error.message);
      }
    }

    return userRef

  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;