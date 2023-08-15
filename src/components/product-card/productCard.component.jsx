import { ProductCardContainer, Footer, Name, Price } from "./product-card.styles.jsx";

import Button , { BUTTON_TYPE_CLASSES }from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";


const ProductCard = ({product})=>{
    const dispatch = useDispatch();

    const {name, imageUrl, price} = product;
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`This is ${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType= { BUTTON_TYPE_CLASSES.inverted } onClick={addProductToCart}>Add to Cart</Button>
        </ProductCardContainer>
    );
} 
export default ProductCard;