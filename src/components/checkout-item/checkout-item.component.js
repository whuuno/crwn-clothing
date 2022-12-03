import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";
import './checkout-item.styles.scss'

const CheckoutItem = ({item}) =>{
    const {name, imageUrl, price, quantity} = item;
    const {clearCartItem ,addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearCartItemHandler = () => clearCartItem(item);
    const addItemToCartHandler = () => addItemToCart(item);
    const removeItemFromCartHandler = () => removeItemFromCart(item);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt=""></img>
            </div>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemFromCartHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemToCartHandler}>
                    &#10095;
                </div>
            </span>
            <div className="remove-button" onClick={clearCartItemHandler}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem;