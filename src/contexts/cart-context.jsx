import { createContext, useReducer, useEffect } from 'react';


const addCartItem = (cartItems, productToAdd) => {
    const isExistingItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if(isExistingItem){
        return (cartItems.map((cartItem) => {
            return (cartItem.id === productToAdd.id)?
                ({...cartItem,
                    quantity : cartItem.quantity + 1 }) 
                : cartItem
            }))
    }

    return [...cartItems,{...productToAdd, quantity : 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1){
        return cartItems.filter( cartItem => cartItem.id !== productToRemove.id)
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

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart : () => {},
    removeItemFromCart : () => {},
    clearCartItem : () => {},
    cartTotal : 0
})

export const INITIAL_CART_STATE = {
    isCartOpen : false,
    cartItems : [],
    cartCount : 0 ,
    cartTotal : 0
}

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS:'SET_CART_ITEMS',
    IS_CART_OPEN:'IS_CART_OPEN',
}

export const cartReducer = (state, action) =>{
    const {type, payload} = action

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS : 
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.IS_CART_OPEN : 
            return {
                ...state,
                ...payload
            }  
        default:
            console.log(`Unhandled Action type ${type} in Cart Reducer`)
    }

}


export const CartProvider = ({children}) => {
    const [{isCartOpen, cartItems,cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

    const setIsCartOpen = (newIsCartOpen) =>{
        dispatch({type: CART_ACTION_TYPES.IS_CART_OPEN, payload:{
            isCartOpen : newIsCartOpen
        }})
    } 

    const updateCartDetails = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity)*(cartItem.price), 0);
        dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload : {
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal
        }})
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartDetails(newCartItems);
    }

    const clearCartItem = (cartItemToClear) => {
        const newCartItems = clearCart(cartItems, cartItemToClear);
        updateCartDetails(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartDetails(newCartItems);
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearCartItem, cartTotal};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}