// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyA9hEso37CnQ9S612wti1Z0q2eQ8xuCdzo',
  authDomain: 'netflix-clone-yt-139ae.firebaseapp.com',
  projectId: 'netflix-clone-yt-139ae',
  storageBucket: 'netflix-clone-yt-139ae.appspot.com',
  messagingSenderId: '765278080800',
  appId: '1:765278080800:web:1a3559da8bfd5b09b71145',
  measurementId: 'G-B4KT6HMTXC',
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

const analytics = getAnalytics(app);

export default app;
export { auth, db };
