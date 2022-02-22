import React from 'react';
import { shallow } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';

// Component import
import { Splash } from '../src/Splash';

const defaultProps = {
    getCauseList: jest.fn(),
    loadTokenFromCookie: jest.fn(),
};

const wrapper = shallow(
    <BrowserRouter>
        <Splash {...defaultProps} />
    </BrowserRouter>
);

describe('<Splash />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('Splash')).toEqual(true);
    });

    it.todo('Test other things on the Splash page');
});
