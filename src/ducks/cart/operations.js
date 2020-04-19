import {
    addToCart,
    clearCart,
    removeFromCart,
} from './actions';

export const addItemToCart = (item) => {
    return (dispatch) => {
        // get cart from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        // Set to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Add new item to redux state
        dispatch(addToCart(item));
    };
};

export const removeItemFromCart = (cart) => {
    return (dispatch) => {
        // Set to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Remove item from redux state
        dispatch(removeFromCart(cart));
    };
};

export const clearAllCartItems = () => {
    return (dispatch) => {
        // Remove entire cart from localStorage
        localStorage.removeItem('cart');
        // Reset redux state
        dispatch(clearCart());
    };
};