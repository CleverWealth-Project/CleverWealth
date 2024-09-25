import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWeiNFlMZQ-3zUXsVGgXyUIXKY7W9cz0w",
    authDomain: "cleverwealth-23ae9.firebaseapp.com",
    projectId: "cleverwealth-23ae9",
    storageBucket: "cleverwealth-23ae9.appspot.com",
    messagingSenderId: "979308487627",
    appId: "1:979308487627:web:63d11a1e4d9ad5ca790c4e",
    measurementId: "G-ZDX8XL9P55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider) // Return the promise here
        .then((result) => {
            console.log('User signed in: ', result.user);
            return result.user; // Return the user or any relevant data
        })
        .catch((error) => {
            console.error('Error signing in: ', error);
            throw error; // Re-throw error if needed for further handling
        });
};
