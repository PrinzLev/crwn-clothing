import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDbqL8C-inS1xvoFckVd6bQQqtv93AMn_Y",
  authDomain: "crwn-clothing-db-c1aa4.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-c1aa4.firebaseio.com",
  projectId: "crwn-clothing-db-c1aa4",
  storageBucket: "crwn-clothing-db-c1aa4.appspot.com",
  messagingSenderId: "1003500752320",
  appId: "1:1003500752320:web:221d4aae74a1348d9dcc25",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("there is an error", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;