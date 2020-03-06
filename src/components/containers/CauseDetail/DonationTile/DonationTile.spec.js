import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { DonationTile } from './DonationTile.js';

const defaultProps = {
    tileIcon: 'Africa',
    cart: [],
    amount: 5,
};

const wrapper = shallow(<DonationTile {...defaultProps} />);

describe('<Tile />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.DonationTile')).toEqual(true);
    });
});
