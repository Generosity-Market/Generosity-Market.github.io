import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

// Component import
import EmptyCart from './EmptyCart.js';

const defaultProps = {
    // Props go here...
};

const wrapper = shallow(
    <BrowserRouter>
        <EmptyCart {...defaultProps} />
    </BrowserRouter>
);

describe('<EmptyCart />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('EmptyCart')).toBe(true);
    });
});
