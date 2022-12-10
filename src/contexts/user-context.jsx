import {createContext, useEffect, useReducer} from 'react';

import {createUserDocumentFromAuth, onAuthStateChangeListener, signOutUser} from '../utils/firebase/firebase.utils'

//see this as ana actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER',
}

export const userReducer = (state, action) => {
    console.log('dispatch');
    console.log(action);
    const { type, payload } = action;
     
    switch (type){
        case USER_ACTION_TYPES.SET_CURRENT_USER : 
            return {
                ...state,
                currentUser : payload
            }
        default :
            throw new Error(`Unhandled Type ${type} in Reducers`)
    }
}

export const INITIAL_STATE = {
    currentUser : null
}


export const UserProvider = ({children}) =>{
    const [ { currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    //const currentUser = state;
    const setCurrentUser = (user) => {
        dispatch({ type : USER_ACTION_TYPES.SET_CURRENT_USER, payload : user});
    }
    const value = { currentUser, setCurrentUser };

    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        signOutUser();
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}