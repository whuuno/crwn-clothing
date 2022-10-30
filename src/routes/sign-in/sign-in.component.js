import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        //const userDocRef = await createUserDocumentFromAuth(response);
    }
    return (
        <div>
            <button onClick={logGoogleUser}>
                Sign In with Google PopUp
            </button>
        </div>
    )
}

export default SignIn;