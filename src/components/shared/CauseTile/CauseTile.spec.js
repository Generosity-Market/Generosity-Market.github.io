import React from 'react';
import { shallow } from 'enzyme';

// Component import
import CauseTile from './CauseTile.js';

const defaultProps = {
    cause: {
        id: 1,
        amount: 1000,
        name: 'Example',
        icon: '',
        mainImage: 'madi-robson-113926.jpg',
    },
};

const wrapper = shallow(<CauseTile {...defaultProps} />);

describe('<CauseTile />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.CauseTile')).toEqual(true);
    });
});
