import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Tile from '../src/Tile';

const defaultProps = {};

const wrapper = shallow(<Tile {...defaultProps} />);

describe('<Tile />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Tile')).toBe(true);
    });
});
