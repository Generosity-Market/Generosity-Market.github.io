import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Cart from './Cart.js';

const defaultProps = {
    handleSelectIcon: () => { },
    cart: [{
        cause: 'Example cause',
        amount: 54,
    }],
};

const wrapper = shallow(<Cart {...defaultProps} />);

describe('<Cart />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.cart-container')).toBe(true);
    });
});
