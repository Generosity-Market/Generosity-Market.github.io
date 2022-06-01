import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider } from 'utilities/testing';

// Component import
import { Receipts } from './Receipts.js';

const defaultProps = {
    // Props go here...
};

const testComponent = <Receipts {...defaultProps} />;

describe('<Receipts />', () => {

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
        expect(container.querySelector('.Receipts')).toBeInTheDocument();
    });

    it('calls the intersection observer api', () => {
        expect(observe).toHaveBeenCalled();
    });
});
