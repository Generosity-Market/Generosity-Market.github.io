import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { VerificationInputGroup } from './VerificationInputGroup.js';

const defaultProps = {
    // props...
};

const wrapper = shallow(<VerificationInputGroup {...defaultProps} />);

describe('<VerificationInputGroup />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.VerificationInputGroup')).toBe(true);
    });
});
