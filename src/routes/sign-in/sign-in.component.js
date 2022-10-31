import {useEffect} from 'react';
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'



const SignIn = () => {
    useEffect( () => {
        async function check(params) {
            const response = await getRedirectResult(auth);
            console.log(response);
        }
        check();
    }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    const logRedirectGoogleUser = async () => {
        const {user} = await signInWithGoogleRedirect();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>
                Sign In with Google PopUp
            </button>
            <button onClick={logRedirectGoogleUser}>
                Sign In with Google Redirect
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;