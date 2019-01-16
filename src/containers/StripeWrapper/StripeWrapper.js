import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import { onToken } from '../../services/stripe';
import Utils from '../../utilities/utilities';

// import PAYMENT_SERVER_URL from '../constants/server';

const StripeWrapper = ({
    name,
    description,
    amount,
    disabled,
    children
}) => {
    const CURRENCY = 'USD';

    return(
        <StripeCheckout
            name={name}
            description={description}
            amount={amount * 100} // in cents
            token={onToken(amount, description)}
            currency={CURRENCY}
            stripeKey={STRIPE_PUBLISHABLE}
            zipCode={true}
            showDesktopModal={Utils.isMobile()}
            disabled={disabled}
        >
            {children}
        </StripeCheckout>
    )
};


StripeWrapper.propTypes = {
    /**
    * The total amount of the transaction
    */
    amount: PropTypes.number.isRequired,
	/**
    * Stripe Token to be sent to server for processing
    */
    token: PropTypes.string.isRequired,
	/**
    * The description of the items in the transaction
    */
    description: PropTypes.string.isRequired,
	/**
    * The name of the cause or organization that purchase goes too
    */
    name: PropTypes.string.isRequired,
};

StripeWrapper.defaultProps = {
    amount: 0,
    description: '',
    name: '',
    token: '',
};

export default StripeWrapper;
