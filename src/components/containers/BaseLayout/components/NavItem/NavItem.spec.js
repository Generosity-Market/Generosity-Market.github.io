import React from 'react';
import { shallow } from 'enzyme';

// Component import
import NavItem from './NavItem.js';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const wrapper = shallow(<NavItem {...defaultProps} />);

describe('<NavItem />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.navLinks')).toEqual(true);
    });
});
