import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';

import { setCategories } from '../../store/category/category.action';

import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'

const Shop = () => {    

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
        const categoriesArray = await getCollectionAndDocuments();
        dispatch(setCategories(categoriesArray))
    }
    getCategories();
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop;