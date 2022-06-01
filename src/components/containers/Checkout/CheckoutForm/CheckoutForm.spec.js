import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, mockState } from 'utilities/testing';

import { loadStripe } from '@stripe/stripe-js';

// Component import
import CheckoutForm from './CheckoutForm.js';

import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST);

const defaultProps = {
    user: mockState.user,
};

const testComponent = (
    <Elements stripe={stripePromise}>
        <CheckoutForm {...defaultProps} />
    </Elements>
);

describe('<CheckoutForm />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.CheckoutForm')).toBeInTheDocument();
    });
});
