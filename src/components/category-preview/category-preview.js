import './category-preview.styles.scss';

import { Fragment } from "react";
//import { useNavigate } from 'react-router-dom';
import ProductCard from "../../components/product/productCard.component";

const CategoryPreview = ({title, products}) => {
    return (
        <div className='category-preview-container'>
            <Fragment key={title}>
                <h2>
                    <span className='title' >{title.toUpperCase()}</span>
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
