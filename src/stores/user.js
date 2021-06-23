import { writable } from "svelte/store";

// have user and uid, do not consume extra firebase requests
export const currentUser = writable({
  user: null,
  loggedIn: false,
  uid: null,
});

export const fbenv = writable({
  firebaseControlled: false,
  firestoreReady: false,
});
