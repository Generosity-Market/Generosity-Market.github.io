import React from 'react';
import { shallow } from 'enzyme';

import AddressInputs from '../src/AddressInputs';

const defaultProps = {
    onChange: jest.fn(),
    name: 'test-phone',
    label: 'test-phone',
    value: '',
};

const wrapper = shallow(<AddressInputs {...defaultProps} />);

describe('<AddressInputs />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});