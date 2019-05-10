import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Loader from '../src/Loader';

const wrapper = shallow(<Loader />);

describe('<Loader />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Loader')).toBe(true);
    });
});
