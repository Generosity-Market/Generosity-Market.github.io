import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import { UserCauses } from './UserCauses.js';

const defaultProps = {};

const testComponent = <UserCauses {...defaultProps} />;

describe('<UserCauses />', () => {

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
        expect(container.querySelector('.UserCauses')).toBeInTheDocument();
    });
});
