import React from 'react';
import { shallow } from 'enzyme';

// Component import
import MainImage from './MainImage.js';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const wrapper = shallow(<MainImage {...defaultProps} />);

describe('<MainImage />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.MainImage')).toBe(true);
    });
});
