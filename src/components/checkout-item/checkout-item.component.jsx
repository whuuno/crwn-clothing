import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx'

const CheckoutItem = ({item}) =>{
    const {name, imageUrl, price, quantity} = item;
    const {clearCartItem ,addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearCartItemHandler = () => clearCartItem(item);
    const addItemToCartHandler = () => addItemToCart(item);
    const removeItemFromCartHandler = () => removeItemFromCart(item);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan> {price} </BaseSpan>
            <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;