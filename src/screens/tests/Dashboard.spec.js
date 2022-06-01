import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

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

const testComponent = <Dashboard {...defaultProps} />;

// TODO: Getting an error from the ImageUploader from stalls-ui package
describe.skip('<Dashboard />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        screen.debug();
        expect(container.querySelector('.Dashboard')).toBeInTheDocument();
    });

    it.todo('Test other things on the Dashboard page');
});
