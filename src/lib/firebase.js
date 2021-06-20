import { initializeApp } from "firebase/app";
import { browser } from "$app/env";
import { fbenv } from "$stores/user";

const firebaseConfig = {
  apiKey: "AIzaSyCDa6kWKU4NG_NjGpkZ5UOBR1d-sMlffbI",
  authDomain: "sveltekit-firebase-auth.firebaseapp.com",
  projectId: "sveltekit-firebase-auth",
  storageBucket: "sveltekit-firebase-auth.appspot.com",
  messagingSenderId: "80860243789",
  appId: "1:80860243789:web:8431ae2e48231e0ca47904",
  measurementId: "G-3SPC707YC4",
};
export let firebaseApp = null;

if (browser) {
  try {
    firebaseApp = initializeApp(firebaseConfig);
    fbenv.update((e) => ({ ...e, firebaseControlled: true }));
  } catch (error) {
    console.log(error);
  }
}
