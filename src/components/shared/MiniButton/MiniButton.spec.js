import React from 'react';
import { shallow } from 'enzyme';

// Component import
import MiniButton from './MiniButton.js';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const wrapper = shallow(<MiniButton {...defaultProps} />);

describe('<MiniButton />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.btns')).toBe(true);
    });
});
