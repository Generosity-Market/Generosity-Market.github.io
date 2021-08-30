import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Popup from './popup.js';

const defaultProps = {};

const wrapper = shallow(<Popup {...defaultProps} />);

describe('<Popup />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Popup')).toBe(true);
    });
});
