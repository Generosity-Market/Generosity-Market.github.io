import React from 'react';
import './CartItem.css';

import {
    removeIndexFromArray,
} from 'utilities';

// Shared UI Components
import { Glyphicon } from '@jgordy24/stalls-ui';
import { MainImage } from 'components/shared';

const CartItem = ({
    amount,
    cart,
    cause,
    profile_image,
    removeItemFromCart,
    type,
}) => {

    const removeItem = () => {
        let indexToRemove;

        for (var i = 0; i < cart.length; i++) {
            if ((cart[i].amount === amount) && (cart[i].cause === cause)) {
                indexToRemove = i;
            }
        }
        let updatedCart = removeIndexFromArray(indexToRemove, cart);
        removeItemFromCart(updatedCart);
    };

    return (
        <div className="CartItem">
            <MainImage round_image={false} profile_image={profile_image} />

            <div className="itemInfo">
                <h3>{cause}</h3>
                <h4>{type}</h4>
                <p>${amount}</p>
            </div>

            <div className="clear" onClick={removeItem}>
                <Glyphicon icon={['far', 'times-circle']} />
            </div>
        </div>
    );
};

export default CartItem;
