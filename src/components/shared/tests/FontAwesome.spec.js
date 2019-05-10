import React from 'react';
import { shallow } from 'enzyme';

// Component import
import FontAwesome from '../src/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Icon Library
import 'styles/fontawesome';

const defaultProps = {
    icon: 'plus',
    style: {
        color: 'white',
        backgroundColor: 'green',
    },
};

const wrapper = shallow(<FontAwesome {...defaultProps} />);

describe('<FontAwesome />', () => {

    it('renders without crashing', () => {
        expect(wrapper.type()).toEqual(FontAwesomeIcon);
    });

    it('should render an svg element', () => {
        expect(wrapper.dive().type()).toEqual('svg');
    });

    it('icon should be white', () => {
        expect(wrapper.get(0).props.style).toHaveProperty('color', 'white');
    });

    it('should have a green background color', () => {
        expect(wrapper.get(0).props.style).toHaveProperty('backgroundColor', 'green');
    });
});
