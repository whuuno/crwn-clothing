import { Fragment, useContext } from "react";

import ProductCard from "../../components/product/productCard.component";
import {CategoriesContext} from "../../contexts/categories-context";

import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
      <Fragment>
        {Object.keys(categoriesMap).map(title => {
          return(
            <Fragment key={title}>
              <h2>{title.toUpperCase()}</h2>
              <div className="products-container">
                {
                  categoriesMap[title].map((product)=>{
                    return(
                        <ProductCard key={product.id} product={product}/>
                    )
                  })
                }
              </div>
            </Fragment>
          )
        })}  
      </Fragment>
    )
}

export default Shop;