import React from 'react';

// Enzyme imports
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { BrowserRouter } from 'react-router-dom';

import { Login } from '../src/Login';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    location: {
        state: {},
    },
};

const wrapper = mount(
    <BrowserRouter>
        <Login {...defaultProps} />
    </BrowserRouter>
);

describe('<Login />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Login')).toEqual(true);
    });

    it.todo('Test other things on the Login page');
});
