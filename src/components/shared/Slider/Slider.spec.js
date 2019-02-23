import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Slider from './Slider.js';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const wrapper = shallow(<Slider {...defaultProps} />);

describe('<Slider />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Slider')).toBe(true);
    });
});
