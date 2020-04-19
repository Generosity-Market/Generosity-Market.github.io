import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, clearAllCartItems } from 'ducks/cart';
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
    clearAllCartItems,
    user,
    ...rest
}) => {
    const [showForm, setShowForm] = useState(false);

    const toggleCheckoutForm = () => {
        setShowForm(state => !state);
    };

    return (
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_TEST}>
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

                {cart.length > 0 &&
                    <CartFooter
                        total={getTotal(cart, 'amount')}
                        toggleCheckoutForm={toggleCheckoutForm}
                        cart={cart}
                        clearAllCartItems={clearAllCartItems}
                        {...rest}
                    />
                }

                {user &&
                    <Elements>
                        <CheckoutForm
                            toggleCheckoutForm={toggleCheckoutForm}
                            showForm={showForm}
                            total={getTotal(cart, 'amount')}
                            submitDonation={submitDonation}
                            cart={cart}
                            clearAllCartItems={clearAllCartItems}
                            user={user}
                            {...rest}
                        />
                    </Elements>
                }

            </div>
        </StripeProvider>
    );
};

const mapStateToProps = ({ cart, user }) => ({ cart, user });

const mapDispatchToProps = { clearAllCartItems, removeItemFromCart, submitDonation };


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
