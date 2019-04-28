// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDEo7vAwQdzChrItWXIP84g-sFHKZygVwc',
  authDomain: 'showmance-65397.firebaseapp.com',
  databaseURL: 'https://showmance-65397.firebaseio.com',
  projectId: 'showmance-65397',
  storageBucket: 'showmance-65397.appspot.com',
  messagingSenderId: '564383299443',
};

// Initialize Firebase
export const defaultProject = firebase.initializeApp(firebaseConfig);
