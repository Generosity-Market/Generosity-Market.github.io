import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { Error404 } from './Error404';

const defaultProps = {
    // props...
};

const wrapper = shallow(<Error404 {...defaultProps} />);

describe('<Error404 />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Error404')).toEqual(true);
    });

    it.todo('Test other things on the 404 page');
});
