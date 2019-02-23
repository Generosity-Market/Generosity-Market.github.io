import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { DonorInfo } from './DonorInfo.js';

const defaultProps = {
    // Props go here...
};

const wrapper = shallow(<DonorInfo {...defaultProps} />);

describe('<DonorInfo />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.DonorInfo')).toBe(true);
    });
});
