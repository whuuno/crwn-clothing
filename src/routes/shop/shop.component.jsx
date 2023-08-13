import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';

import { setCategoriesMap } from '../../store/category/category.action';

import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'

const Shop = () => {    

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
        const newCategoriesMap = await getCollectionAndDocuments();
        dispatch(setCategoriesMap(newCategoriesMap))
    }
    getCategoriesMap();
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop;