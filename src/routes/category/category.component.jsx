import { CategoryTitle, CategoryContainer} from './category.styles.jsx';

import { Fragment, useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories-context';
import ProductCard from '../../components/product-card/productCard.component';

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