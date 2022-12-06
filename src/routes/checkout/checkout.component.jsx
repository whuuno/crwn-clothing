import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    Item
                </HeaderBlock>
                <HeaderBlock>
                    Description
                </HeaderBlock>
                <HeaderBlock>
                    Price
                </HeaderBlock>
                <HeaderBlock>
                    Quantity
                </HeaderBlock>
                <HeaderBlock>
                    Remove
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem)=>{
                    return (
                        <CheckoutItem item={cartItem} key={cartItem.id}/>
                    )
                })
            }
            <Total>Total : {cartTotal}</Total>
        </CheckoutContainer>
    )    
}

export default Checkout;