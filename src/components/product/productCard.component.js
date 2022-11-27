import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({product})=>{
    const {name, imageUrl, price} = product;
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`This is ${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button>Add to Cart</Button>
        </div>
    );
} 
export default ProductCard;