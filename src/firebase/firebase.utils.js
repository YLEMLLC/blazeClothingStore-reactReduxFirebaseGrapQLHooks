import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBIg8aD_OplHp-7ZMNlp1rS-3OQWmFMZmg',
  authDomain: 'blaze-db-dedc5.firebaseapp.com',
  databaseURL: 'https://blaze-db-dedc5.firebaseio.com',
  projectId: 'blaze-db-dedc5',
  storageBucket: 'blaze-db-dedc5.appspot.com',
  messagingSenderId: '360931780215',
  appId: '1:360931780215:web:c153dcd6501992a66e4872',
  measurementId: 'G-5SV41HVXFL',
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdate,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating', error.message);
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
