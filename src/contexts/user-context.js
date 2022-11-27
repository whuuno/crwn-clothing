import {createContext, useState, useEffect} from 'react';

import {createUserDocumentFromAuth, onAuthStateChangeListener, signOutUser} from '../utils/firebase/firebase.utils'

//see this as ana actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            console.log(user);
            setCurrentUser(user);
        });

        signOutUser();
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}