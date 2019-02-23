import React from 'react';
import { shallow } from 'enzyme';

// Component import
import SlideMenu from './SlideMenu.js';
import navLinks from 'constants/linksData.js';

const defaultProps = {
    navLinks: navLinks,
};

const wrapper = shallow(<SlideMenu {...defaultProps} />);

describe('<SlideMenu />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.SlideMenu')).toBe(true);
    });
});
