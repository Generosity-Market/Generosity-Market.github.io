import React from 'react';
import './EmptyCart.css';

import { useNavigate } from 'react-router-dom';

// Shared UI Components
import {
    // LinkButton,
    Button,
} from '@jgordy24/stalls-ui';
import { TexturedCircle } from 'components/shared';

const EmptyCart = () => {

    const navigate = useNavigate();

    return (
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

            {/* <LinkButton
                label='Find a Cause'
                bsStyle='success'
                href='/causes'
            /> */}

            <Button
                label='Go back'
                bsStyle='success'
                onClick={() => navigate(-1)}
            />


        </div>
    );
};

export default EmptyCart;
