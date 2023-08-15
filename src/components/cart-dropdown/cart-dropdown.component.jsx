import { useNavigate } from "react-router-dom"; 

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx';
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action"

const CartDropdown = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    const navigate = useNavigate();

    const checkoutNavigateHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen));
        navigate('/checkout');
    }

    return(
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? (
                    cartItems.map((cartItem) => {
                        return <CartItem cartItem={cartItem} key={cartItem.id}/>
                    })
                ): (
                    <EmptyMessage>Your Cart is empty</EmptyMessage>
                )  
            }
            </CartItems>
            <Button onClick={checkoutNavigateHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;