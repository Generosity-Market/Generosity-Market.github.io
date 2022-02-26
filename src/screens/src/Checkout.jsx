import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, clearAllCartItems } from 'ducks/cart';
import { submitDonation } from 'ducks/cause';
import '../styles/Checkout.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { Modal } from '@jgordy24/stalls-ui';

import {
    getTotal,
} from 'utilities';

// Checkout Components
import {
    Cart,
    CartFooter,
    CheckoutForm,
    EmptyCart,
} from 'components/containers/Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST);

export const Checkout = ({
    cart,
    clearAllCartItems,
    user,
    ...rest
}) => {

    const total = getTotal(cart, 'amount');

    const modalTriggerProps = {
        label: `Donate $${total}`,
        disabled: !(total > 0),
        bsSize: 'md',
    };

    return (
        <div className="Checkout">

            {!cart.length > 0
                ? <EmptyCart />
                : (
                    <Cart
                        cart={cart}
                        clearAllCartItems={clearAllCartItems}
                        {...rest}
                    />
                )
            }

            {user && cart?.length > 0 && (
                <div className='trigger-checkout-modal'>
                    <Modal triggerProps={modalTriggerProps}>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                // toggleCheckoutForm={toggleCheckoutForm}
                                // showForm={showForm}
                                total={total}
                                submitDonation={submitDonation}
                                cart={cart}
                                clearAllCartItems={clearAllCartItems}
                                user={user}
                                {...rest}
                            />
                        </Elements>
                    </Modal>
                </div>
            )}

        </div>
    );
};

const mapStateToProps = ({ cart, user }) => ({ cart, user });

const mapDispatchToProps = { clearAllCartItems, removeItemFromCart, submitDonation };


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
