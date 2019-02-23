import React from 'react';
import { shallow } from 'enzyme';

// Component import
import SliderSection from './SliderSection.js';
import { Slider } from 'components/shared';

const defaultProps = {
    causeList: [],
};

const wrapper = shallow(<SliderSection {...defaultProps} />);

describe('<SliderSection />', () => {

    it('renders without crashing', () => {
        expect(wrapper.contains(<Slider />)).toBe(true);
    });
});
