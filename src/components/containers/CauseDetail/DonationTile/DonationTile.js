import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './DonationTile.css';

import {
    addItemToCart,
    removeItemFromCart,
} from 'ducks/cart';

import {
    getIconUrl,
    removeIndexFromArray,
} from 'utilities';

export const DonationTile = ({
    addItemToCart,
    amount,
    cart,
    cause,
    isPurchased,
    removeItemFromCart,
    tileIcon,
    ...rest
}) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        cart.forEach(index => {
            if ((index.amount === amount) && (cause === index.cause)) {
                setIsSelected(true);
            }
        });
    }, [amount, cause, cart]);

    const addTileToCart = (args) => {
        addItemToCart({ ...args });
        setIsSelected(true);
    };

    const removeTileFromCart = () => {
        let indexToRemove;

        for (var i = 0; i < cart.length; i++) {
            if ((cart[i].amount === amount) && (cart[i].cause === cause)) {
                indexToRemove = i;
            }
        }

        let updatedCart = removeIndexFromArray(indexToRemove, cart);

        removeItemFromCart(updatedCart);
        setIsSelected(false);
    };

    return (
        <div
            className={isPurchased ? 'DonationTile isPurchased' : 'DonationTile'}
            onClick={isSelected ? removeTileFromCart :
                () => addTileToCart({ tileIcon, amount, cause, ...rest })}
        >

            <p className={isSelected ? 'tile-amount isSelected' : 'tile-amount'}>${amount}</p>

            <img src={getIconUrl(tileIcon)} alt={`${tileIcon} Icon`} />

        </div>
    );
};

const mapStateToProps = ({ cart }) => ({ cart });

const mapDispatchToProps = { addItemToCart, removeItemFromCart };


export default connect(mapStateToProps, mapDispatchToProps)(DonationTile);
