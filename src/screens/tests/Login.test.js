import React from 'react';

// Enzyme imports
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Login } from '../src/Login';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    location: {
        state: {},
    },
};

const wrapper = shallow(<Login {...defaultProps} />);

describe('<Login />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Login')).toEqual(true);
    });

    it.todo('Test other things on the Login page');
});
