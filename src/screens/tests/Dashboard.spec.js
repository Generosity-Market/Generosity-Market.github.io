import React from 'react';
import { shallow } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';

// Component import
import { Dashboard } from '../src/Dashboard';

const defaultProps = {
    match: {
        params: {
            id: 1
        }
    },
    user: {
        Preferences: [],
    },
    userData: {
        id: 1,
    }
};

const wrapper = shallow(
    <BrowserRouter>
        <Dashboard {...defaultProps} />
    </BrowserRouter>
);

describe('<Dashboard />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('Dashboard')).toEqual(true);
    });

    it.todo('Test other things on the Dashboard page');
});
