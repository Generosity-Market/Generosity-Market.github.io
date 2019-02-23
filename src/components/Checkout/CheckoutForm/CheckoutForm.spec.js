import React from 'react';
import { shallow } from 'enzyme';

// Component import
import CheckoutForm from './CheckoutForm.js';

import {
    Elements,
} from 'react-stripe-elements';

const defaultProps = {
    // Props go here...
};

const wrapper = shallow(
    <Elements>
        <CheckoutForm {...defaultProps} />
    </Elements>
);

describe('<CheckoutForm />', () => {

    it('renders without crashing', () => {
        expect(wrapper.contains(<CheckoutForm />)).toBe(true);
    });
});
