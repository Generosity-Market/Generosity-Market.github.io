import React from 'react';
import { shallow } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';

// Component import
import NavItem from './NavItem.js';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const wrapper = shallow(
    <BrowserRouter>
        <NavItem {...defaultProps} />
    </BrowserRouter>
);

describe('<NavItem />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('NavItem')).toEqual(true);
    });
});
