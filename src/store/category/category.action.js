import {createAction} from '../../utils/reducer/reducer.utils';
import CATEGORY_TYPES from './category.types';

export const setCategoriesMap = (categoriesMap) =>{
    return createAction(CATEGORY_TYPES.SET_CATEGORY_MAP, categoriesMap)
}