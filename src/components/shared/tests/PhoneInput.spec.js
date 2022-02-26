import React from 'react';
import { shallow } from 'enzyme';

import PhoneInput from '../src/PhoneInput';

const defaultProps = {
    onChange: jest.fn(),
    name: 'test-phone',
    label: 'test-phone',
    value: '',
};

const wrapper = shallow(<PhoneInput {...defaultProps} />);

describe('<PhoneInput />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});