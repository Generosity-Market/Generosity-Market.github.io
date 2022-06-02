import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

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
describe('<Dashboard />', () => {
    checkConsoleWarnOrErrors();
    let container;

    const observe = jest.fn();
    const unobserve = jest.fn();
    const disconnect = jest.fn();
    beforeEach(() => {
        window.IntersectionObserver = jest.fn(() => ({
            observe,
            unobserve,
            disconnect,
        }));

        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Dashboard')).toBeInTheDocument();
    });

    it('calls the intersection observer api', () => {
        expect(observe).toHaveBeenCalled();
    });

    it.todo('Test other things on the Dashboard page');
});
