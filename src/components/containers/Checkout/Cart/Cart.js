import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

// Shared UI Components
import { Glyphicon } from '@jgordy24/stalls-ui';

const Cart = ({
    cart,
    clearCart,
    removeFromCart,
    // user,
}) => {
    // console.log("Cart User: ", user);

    const cartItems = cart.map(item => {
        return (
            <CartItem
                key={item.cause + item.amount}
                {...item}
                cart={cart}
                removeFromCart={removeFromCart}
            />
        );
    });

    return (
        <div className="cart-container">
            <h3 className="basket">Your Basket</h3>

            <div className="inner-container">

                {cartItems}

                {cart.length > 1 &&
                    <div className="clear-cart" onClick={() => clearCart()}>
                        <p>clear cart</p>
                        <Glyphicon icon={'times'} />
                    </div>
                }

            </div>
        </div>
    );

};

export default Cart;
