import React from 'react';
import { shallow } from 'enzyme';

// Component import
import TexturedCircle from '../src/TexturedCircle';

const defaultProps = {};

const wrapper = shallow(<TexturedCircle {...defaultProps} />);

describe('<TexturedCircle />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.textured')).toBe(true);
    });
});