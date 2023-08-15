import CATEGORY_TYPES from "./category.types";

const INITIAL_CATEGORY_STATE = {
    categories : []
}

export const categoryReducer = (state = INITIAL_CATEGORY_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case CATEGORY_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categories: payload
            };
        default :
            return state;
    }
}