import React from 'react';
import { shallow } from 'enzyme';

// Component import
import BottomMenu from './BottomMenu.js';
import bottomNavLinks from 'constants/BottomNavLinks';

const defaultProps = {
    navLinks: bottomNavLinks,
};

const wrapper = shallow(<BottomMenu {...defaultProps} />);

describe('<BottomMenu />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.BottomMenu')).toBe(true);
    });
});