import React from 'react';
import { shallow } from 'enzyme';

import { loadStripe } from '@stripe/stripe-js';

// Component import
import CheckoutForm from './CheckoutForm.js';

import {
    Elements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST);

const defaultProps = {
    // Props go here...
};

const wrapper = shallow(
    <Elements stripe={stripePromise}>
        <CheckoutForm {...defaultProps} />
    </Elements>
);

describe('<CheckoutForm />', () => {

    it('renders without crashing', () => {
        expect(wrapper.contains(<CheckoutForm />)).toBe(true);
    });
});
