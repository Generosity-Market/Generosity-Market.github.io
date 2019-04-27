import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { TileSection } from './TileSection.js';

const defaultProps = {
    match: { params: { id: 1 } },
};

const wrapper = shallow(<TileSection {...defaultProps} />);

describe('<TileSection />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.TileSection')).toBe(true);
    });
});
