import React from 'react';
import { shallow } from 'enzyme';

// Component import
import FontAwesome from './FontAwesome.js';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const wrapper = shallow(<FontAwesome {...defaultProps} />);

describe('<FontAwesome />', () => {

    it('renders without crashing', () => {
        expect(wrapper.html()).toEqual('<i class="submit" style="color:white"></i>');
    });
});
