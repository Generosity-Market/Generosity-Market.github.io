import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { Tile } from './Tile.js';

const defaultProps = {
    tileIcon: 'Africa',
    cart: [],
    amount: 5,
};

const wrapper = shallow(<Tile {...defaultProps} />);

describe('<Tile />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Tile')).toEqual(true);
    });
});
