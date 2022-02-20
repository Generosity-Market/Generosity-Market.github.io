import React from 'react';
import { shallow } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';

// Component import
import { BaseLayout } from './BaseLayout.js';

const defaultProps = {
    match: {
        params: {
            id: 1,
        }
    },
    loadTokenFromCookie: jest.fn(),
    getCauseList: jest.fn(),
};

const wrapper = shallow(
    <BrowserRouter>
        <BaseLayout {...defaultProps} />
    </BrowserRouter>
);

describe('<BaseLayout />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('BaseLayout')).toEqual(true);
    });
});
