import { CategoryTitle, CategoryContainer} from './category.styles.jsx';

import { Fragment, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useSelector} from 'react-redux';

import ProductCard from '../../components/product-card/productCard.component';
import { selectCategoriesMap } from '../../store/category/category.selector.js';

const Category = () => {
    const { category } = useParams();

    const categoriesMap = useSelector(selectCategoriesMap);

    const defaultProducts = (categoriesMap.length > 0 ? categoriesMap : []);

    const [products, setProducts] = useState(defaultProducts[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return(
        <Fragment>
            <CategoryTitle>
                {category.toUpperCase()}
            </CategoryTitle>
            <CategoryContainer>    
                {products &&
                    products.map(product => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;