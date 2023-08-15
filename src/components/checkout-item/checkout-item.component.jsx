import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx'
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearCartItem, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CheckoutItem = ({item}) =>{
    const dispatch = useDispatch();

    const { cartItems } = useSelector(selectCartItems);
    const {name, imageUrl, price, quantity} = item;

    const clearCartItemHandler = () => dispatch(clearCartItem(cartItems, item));
    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, item));
    const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, item));

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