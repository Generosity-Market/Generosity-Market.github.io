import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../src/TextInput';

const defaultProps = {
    value: '',
    onChange: jest.fn(),
    name: 'test-input',
    label: 'test-input',
};

const wrapper = shallow(<TextInput {...defaultProps} />);

describe('<TextInput />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});