import React from 'react';
import { shallow } from 'enzyme';

// Component import
import EmptyCart from './EmptyCart.js';

const defaultProps = {
    // Props go here...
};

const wrapper = shallow(<EmptyCart {...defaultProps} />);

describe('<EmptyCart />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.EmptyCart')).toBe(true);
    });
});
