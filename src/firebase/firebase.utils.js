import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD-gdedS3mlWT5chgXZV-bsxqar4sLBRII',
  authDomain: 'blaze-db-26fab.firebaseapp.com',
  databaseURL: 'https://blaze-db-26fab.firebaseio.com',
  projectId: 'blaze-db-26fab',
  storageBucket: 'blaze-db-26fab.appspot.com',
  messagingSenderId: '384257048221',
  appId: '1:384257048221:web:0ddd928c7990cc8c095e74',
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
