import { useState } from "react";

const defaultFormField = {
    username : '',
    email : '',
    password : '',
    confirmPassword : ''
};

const SignUpForm = () => {
    const {formField, setFormField} = useState(defaultFormField);
    const {username, email, password, confirmPassword} = formField;

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
        console.log(formField);
    };

    return(
        <div>
            <h2>Sign Up with your details</h2>
            <form onSubmit={()=> {}}>
                <label>Username</label>
                <input 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='username' 
                    value={username} 
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