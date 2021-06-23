import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
} from "firebase/auth";

import { currentUser } from "$stores/user";

const provider = new GoogleAuthProvider();

export const loginWithRedirect = async () => {
  const auth = getAuth();
  signInWithRedirect(auth, provider);
};

export const createWithEmailAndPassword = async (email, password) => {
  console.log({ email, password });
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return error;
    });
};

export async function loginWithGoogle() {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      await createUser(user);

      return { user, isLoggedIn };
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      return { errorCode, errorMessage, email, credential };
      // ...
    });
}
export const doLogout = async () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Singed out");
    })
    .catch((error) => {
      // An error happened.
    });
};

export const authChanged = () => {
  const auth = getAuth();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      currentUser.set({
        user,
        loggedIn: true,
        uid: user.uid,
      });
    } else {
      // User is signed out
      // ...
      currentUser.set({
        user: null,
        loggedIn: false,
        uid: null,
      });
    }
  });
};
