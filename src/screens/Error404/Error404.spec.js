import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { Error404 } from './Error404.js';

const defaultProps = {
    // props...
};

const wrapper = shallow(<Error404 {...defaultProps} />);

describe('<Error404 />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Error404')).toEqual(true);
    });
});
