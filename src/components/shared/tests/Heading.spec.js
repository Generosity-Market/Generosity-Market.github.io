import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Heading from '../src/Heading';

const defaultProps = {
    text: 'Nearly Funded',
};

const wrapper = shallow(<Heading {...defaultProps} />);

describe('<Heading />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Heading')).toBe(true);
    });
});
