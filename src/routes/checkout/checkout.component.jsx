import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { 
    CheckoutContainer, 
    CheckoutHeader, 
    HeaderBlock, 
    Total
} from './checkout.styles.jsx';

import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Item</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem)=>{
                    return (
                        <CheckoutItem item={cartItem} key={cartItem.id}/>
                    )
                })
            }
            <Total>Total : ${cartTotal}</Total>
        </CheckoutContainer>
    )   ; 
};

export default Checkout;