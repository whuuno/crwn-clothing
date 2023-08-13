import { Fragment } from "react";

//import {CategoriesContext} from "../../contexts/categories-context";

import CategoryPreview from "../../components/category-preview/category-preview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    
    return (
      <Fragment>
            {
            Object.keys(categoriesMap).map(title => {
                return(
                    <CategoryPreview key={title} title={title} products= {categoriesMap[title]} />
                )
            })
            }  
      </Fragment>
    )
}

export default CategoriesPreview;