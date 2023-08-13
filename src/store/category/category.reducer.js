import CATEGORY_TYPES from "./category.types";

const INITIAL_CATEGORY_STATE = {
    categoriesMap : {}
}

export const categoryReducer = (state = INITIAL_CATEGORY_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case CATEGORY_TYPES.SET_CATEGORY_MAP:
            return {
                ...state,
                categoriesMap: payload
            }
        default :
            return state;
    }
}