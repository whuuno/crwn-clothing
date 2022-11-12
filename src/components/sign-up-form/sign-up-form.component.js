import { useState } from "react";

import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
};

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const {displayName, email, password, confirmPassword} = formField;

    //console.log(formField);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("password do not match");
            return ;
        }
        try{
            const {user} = await createUserAuthWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName });
        }
        catch (error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user that already exist');
            }
            console.log("user creation encountered an error", error);
        }
    };

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
    };

    return(
        <div>
            <h2>Sign Up with your details</h2>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName} 
                />

                <label>Email</label>
                <input 
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />

                <label>Password</label>
                <input 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />

                <label>Confirm Password</label>
                <input 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                /> 

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;