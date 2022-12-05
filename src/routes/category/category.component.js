import './category.styles.scss';

import { Fragment, useContext, useEffect, useState } from 'react';

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
        <Fragment>
            <h2 className='category-title'>
                {category.toUpperCase()}
            </h2>
            <div className='category-container'>    
                {products &&
                    products.map(product => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default Category;