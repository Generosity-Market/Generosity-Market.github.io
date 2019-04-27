import React from 'react';
import { shallow } from 'enzyme';

// Component import
import CartFooter from './CartFooter.js';

const defaultProps = {
    // Put props here...
};

const wrapper = shallow(<CartFooter {...defaultProps} />);

describe('<CartFooter />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.CartFooter')).toBe(true);
    });
});
