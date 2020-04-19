import React from 'react';
import './EmptyCart.css';

// Shared UI Components
import { LinkButton } from '@jgordy24/stalls-ui';
import { TexturedCircle } from 'components/shared';

const EmptyCart = () => (
    <div className="EmptyCart">

        <TexturedCircle
            className="basket-icon"
            colorMask="rgba(75,183,77,0.07)"
        >
            <img src={require('Assets/icons/basket.png')} alt="basket icon" />
        </TexturedCircle>

        <div className="empty-message">
            <h3>Your basket is empty</h3>
            <h4>Fill it by supporting some great causes</h4>
        </div>

        <LinkButton
            label='Find a Cause'
            bsStyle='success'
            href='/causes'
        />

    </div>
);

export default EmptyCart;
