import React from 'react';
import './CartFooter.css';

// Shared UI Components
import {
    FontAwesome,
} from 'components/shared';

const CartFooter = ({
    // cart, 
    total,
    toggleCheckoutForm,
}) => {

    return (
        <div className="CartFooter">

            {/*
                <div className="total-container">
                <h4>Total</h4>
                <h3 className='total'>${total}</h3>
                </div>
            */}

            <div
                className={total === 0 ? 'placeholder-btn disabled' : 'placeholder-btn'}
                onClick={toggleCheckoutForm}
            >
                Donate ${total}
                <FontAwesome classname={'far fa-credit-card'} />
            </div>

        </div>
    );
};

export default CartFooter;