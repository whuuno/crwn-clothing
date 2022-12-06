import { CategoryPreviewContainer, Preview, Title} from './category-preview.styles.jsx';

import { Fragment } from "react";
import ProductCard from "../product-card/productCard.component";

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <Fragment key={title}>
                <h2>
                    <Title to={title}>{title.toUpperCase()}</Title>
                </h2>
                <Preview>
                    {
                        products
                        .filter((_, idx) => idx < 4)
                        .map((product)=>{
                            return(
                                <ProductCard key={product.id} product={product}/>
                            )
                        })
                    }
                </Preview>
            </Fragment>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;
