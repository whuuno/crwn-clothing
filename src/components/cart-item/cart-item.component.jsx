import { CartItemContainer, ItemDetails, Name} from "./cart-item.styles.jsx";

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    return(
        <CartItemContainer>
            <img src={`${imageUrl}`} alt=""/>
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;