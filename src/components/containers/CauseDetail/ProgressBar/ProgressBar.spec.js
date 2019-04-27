import React from 'react';
import { shallow } from 'enzyme';

// Component import
import ProgressBar from './ProgressBar.js';

const defaultProps = {
    // props...
};

const wrapper = shallow(<ProgressBar {...defaultProps} />);

describe('<ProgressBar />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.ProgressBar')).toBe(true);
    });
});
