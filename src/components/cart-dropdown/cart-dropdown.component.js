import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart-context";

import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const checkoutNavigateHandler = () => {
        setIsCartOpen(!isCartOpen);
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