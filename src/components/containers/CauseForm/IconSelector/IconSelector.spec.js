import React from 'react';
import { shallow } from 'enzyme';

// Component import
import IconSelector from './IconSelector.js';

const defaultProps = {
    handleSelectIcon: () => { },
};

const wrapper = shallow(<IconSelector {...defaultProps} />);

describe('<IconSelector />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.IconSelector')).toBe(true);
    });
});
