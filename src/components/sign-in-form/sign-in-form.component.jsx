import { useState } from "react";

import {  
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx';

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

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            await signInAuthUserWithEmailAndPassword(email, password);
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
        <SignInContainer>
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
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={ BUTTON_TYPE_CLASSES.google } onClick={signInWithGooglePopup}>Google Sign In</Button>
                </ButtonsContainer>
                
            </form>
        </SignInContainer>
    )
}

export default SignInForm;