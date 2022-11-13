import { useState } from "react";

import { 
    createUserDocumentFromAuth, 
    signInWithGooglePopup,
    signInUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultSignInDetail = {
    email : '',
    password : ''
};

const SignInForm = () => {
    const [signInDetail, setSignInDetail] = useState(defaultSignInDetail);
    const {email, password} = signInDetail;

    const resetFormField = () => {
        setSignInDetail(defaultSignInDetail);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    // useEffect( () => {
    //     async function check(params) {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //     }
    //     check();
    // }, [])
    // const signInWithGoogleByRedirect = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     await createUserDocumentFromAuth(user);
    // }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            await signInUserWithEmailAndPassword(email, password);
            resetFormField();
        }
        catch (error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect Password');
                    break;
                case 'auth/user-not-found':
                    alert('User don\'t exist');
                    break;
                default :
                    console.log(error);
            }
        }
    };

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setSignInDetail({...signInDetail, [name]: value});
    };

    return(
        <div className="sign-in-container">
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label = 'Email'
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />

                <FormInput 
                    label = 'Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType = 'google' onClick={signInWithGoogle}> Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
}


export default SignInForm;