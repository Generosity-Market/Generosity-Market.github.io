import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Popup from './Popup.js';

const defaultProps = {
    // props...
};

const wrapper = shallow(<Popup {...defaultProps} />);

describe('<Popup />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Popup')).toBe(true);
    });
});
