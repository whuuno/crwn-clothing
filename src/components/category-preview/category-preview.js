import './category-preview.styles.scss';

import { Fragment } from "react";
import { Link } from 'react-router-dom';
import ProductCard from "../../components/product/productCard.component";

const CategoryPreview = ({title, products}) => {
    return (
        <div className='category-preview-container'>
            <Fragment key={title}>
                <h2>
                    <Link className='title' to={title}>{title.toUpperCase()}</Link>
                </h2>
                <div className="preview">
                    {
                        products
                        .filter((_, idx) => idx < 4)
                        .map((product)=>{
                            return(
                                <ProductCard key={product.id} product={product}/>
                            )
                        })
                    }
                </div>
            </Fragment>
        </div>
    )
}

export default CategoryPreview;
