import React from 'react';
import { shallow } from 'enzyme';

import AddressInputs from './AddressInputs.js';

const defaultProps = {};

const wrapper = shallow(<AddressInputs {...defaultProps} />);

describe('<AddressInputs />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});