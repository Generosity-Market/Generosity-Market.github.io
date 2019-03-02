import React from 'react';
import './CartItem.css';

import {
    removeIndexFromArray,
} from 'utilities';

// Shared UI Components
import {
    FontAwesome,
    MainImage,
} from 'components/shared';

const CartItem = ({
    amount,
    cart,
    cause,
    mainImage,
    removeFromCart,
    type,
}) => {

    const removeItemFromCart = () => {
        let indexToRemove;

        for (var i = 0; i < cart.length; i++) {
            if ((cart[i].amount === amount) && (cart[i].cause === cause)) {
                indexToRemove = i;
            }
        }
        let updatedCart = removeIndexFromArray(indexToRemove, cart);
        removeFromCart(updatedCart);
    };

    return (
        <div className="CartItem">
            <MainImage roundImage={false} mainImage={mainImage} />

            <div className="itemInfo">
                <h3>{cause}</h3>
                <h4>{type}</h4>
                <p>${amount}</p>
            </div>

            <div className="clear" onClick={() => removeItemFromCart()}>
                <FontAwesome icon={['far', 'times-circle']} />
            </div>
        </div>
    );
};

export default CartItem;
