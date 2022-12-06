import { createContext, useState, useEffect } from 'react';


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

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
        setCartCount(newCartCount);
    } , [cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity)*(cartItem.price), 0);
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const clearCartItem = (cartItemToClear) => {
        setCartItems(clearCart(cartItems, cartItemToClear));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearCartItem, cartTotal};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}