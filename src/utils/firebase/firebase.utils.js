import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDeXeIvT40T-p2V8ZVH8754J9XZEJkv9k",
    authDomain: "crwn-clothing-db-a116a.firebaseapp.com",
    projectId: "crwn-clothing-db-a116a",
    storageBucket: "crwn-clothing-db-a116a.appspot.com",
    messagingSenderId: "497184712319",
    appId: "1:497184712319:web:4a1774669347a27561c14a"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {displayName: 'name'}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    //console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    //console.log(userSnapshot);
    //console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }
        catch(error) {
            console.log('error creating the user', error.message);
        }
    }
}

export const createUserAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () =>  await signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);
