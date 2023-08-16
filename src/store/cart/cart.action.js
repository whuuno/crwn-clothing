import { createAction } from '../../utils/reducer/reducer.utils';
import CART_ACTION_TYPES from './cart.types';


const addCartItem = (cartItems, productToAdd) => {
    const isExistingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(isExistingItem){
        return (cartItems.map((cartItem) => {
            return (cartItem.id === productToAdd.id)?
                ({...cartItem,
                    quantity : cartItem.quantity + 1 }) 
                : cartItem
            }));
    }

    return [ ...cartItems, {...productToAdd, quantity : 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1){
        return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id)
    };

    return cartItems.map(cartItem => {
        return (cartItem.id === existingCartItem.id) ? ({
            ...cartItem, quantity: cartItem.quantity -1
        }): cartItem
    })
}

const clearCart = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearCartItem = (cartItems, cartItemToClear) => {
    const newCartItems = clearCart(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = (boolean) => {
    return (createAction(CART_ACTION_TYPES.IS_CART_OPEN, boolean))
} 