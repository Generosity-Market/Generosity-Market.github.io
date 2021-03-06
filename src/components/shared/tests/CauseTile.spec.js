import React from 'react';
import { shallow } from 'enzyme';

// Component import
import CauseTile from '../src/CauseTile';

const defaultProps = {
    cause: {
        id: 1,
        goal_amount: 1000,
        name: 'Example',
        icon: '',
        profile_image: 'madi-robson-113926.jpg',
    },
};

const wrapper = shallow(<CauseTile {...defaultProps} />);

describe('<CauseTile />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.CauseTile')).toEqual(true);
    });
});
