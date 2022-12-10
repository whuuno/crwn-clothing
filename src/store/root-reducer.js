import { combineReducers } from 'redux';

import { userReducer } from '../contexts/user-context';

export const rootReducer = combineReducers({
    user: userReducer
});