import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart-context";

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const checkoutNavigateHandler = () => {
        setIsCartOpen(!isCartOpen);
        navigate('/checkout');
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {
                cartItems.map((cartItem) => {
                    return <CartItem cartItem={cartItem} key={cartItem.id}/>
                })
            }
            </div>
            <Button onClick={checkoutNavigateHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;