import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, clearCart } from 'ducks/cart';
import { submitDonation } from 'ducks/cause';
import '../styles/Checkout.css';

import {
    Elements,
    StripeProvider,
} from 'react-stripe-elements';

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

export const Checkout = ({
    cart,
    clearCart,
    // user,
    ...rest
}) => {
    const [showForm, setShowForm] = useState(false);

    const toggleCheckoutForm = () => {
        setShowForm(state => !state);
    };

    return (
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_TEST}>
            <div className="Checkout">

                {!cart.length > 0 ?
                    <EmptyCart />
                    : (
                        <Cart
                            cart={cart}
                            clearCart={clearCart}
                            {...rest}
                        />
                    )
                }

                {cart.length > 0 &&
                    <CartFooter
                        total={getTotal(cart, 'amount')}
                        toggleCheckoutForm={toggleCheckoutForm}
                        cart={cart}
                        clearCart={clearCart}
                        {...rest}
                    />
                }

                <Elements>
                    <CheckoutForm
                        toggleCheckoutForm={toggleCheckoutForm}
                        showForm={showForm}
                        total={getTotal(cart, 'amount')}
                        submitDonation={submitDonation}
                        cart={cart}
                        clearCart={clearCart}
                        {...rest}
                    />
                </Elements>

            </div>
        </StripeProvider>
    );
};

const mapStateToProps = ({ cart, user }) => ({ cart, user });

const mapDispatchToProps = { clearCart, removeFromCart, submitDonation };


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
