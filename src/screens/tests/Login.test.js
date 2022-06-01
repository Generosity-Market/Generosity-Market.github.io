import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

import { Login } from '../src/Login';

const defaultProps = {
    location: {
        state: {},
    },
};

const testComponent = <Login {...defaultProps} />;

describe('<Login />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Login')).toBeInTheDocument();
    });

    it.todo('Test other things on the Login page');
});
