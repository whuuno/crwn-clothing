import './category.styles.scss';

import { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories-context';
import ProductCard from '../../components/product/productCard.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const defaultProducts = (categoriesMap.length > 0 ? categoriesMap : []);

    const [products, setProducts] = useState(defaultProducts);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return(
        <div className='category-container'>
            {products &&
                products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default Category;