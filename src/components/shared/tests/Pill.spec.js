import React from 'react';
import { shallow } from 'enzyme';

import Pill from '../src/Pill';

const defaultProps = {
    classname: 'edit',
    icon: 'pencil',
    style: {
        color: 'white'
    },
    children: 'my children',
};

const wrapper = shallow(<Pill {...defaultProps} />);

describe('<Pill />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Pill')).toBe(true);
    });
});