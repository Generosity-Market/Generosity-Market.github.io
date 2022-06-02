import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import { VerificationInputGroup } from './VerificationInputGroup.js';

const defaultProps = {
    handleUpdateState: jest.fn(),
    state: { legal_name: 'my_org' },
};

const testComponent = <VerificationInputGroup {...defaultProps} />;

// TODO: Investigate console warnings and errors in tests
describe('<VerificationInputGroup />', () => {

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.VerificationInputGroup')).toBeInTheDocument();
    });
});
