import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Banner from '../src/Banner';

const defaultProps = {
    BGimage: 'to be decided...',
    profile_image: 'dilly dilly',
};

const wrapper = shallow(<Banner {...defaultProps} />);

describe('<Banner />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Header')).toEqual(true);
    });
});
