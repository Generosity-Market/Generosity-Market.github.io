import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../src/TextInput';

const defaultProps = {};

const wrapper = shallow(<TextInput {...defaultProps} />);

describe('<TextInput />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});