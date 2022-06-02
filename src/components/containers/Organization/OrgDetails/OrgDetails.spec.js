import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import OrgDetails from './OrgDetails.js';

const defaultProps = {
    // props...
};

const testComponent = <OrgDetails {...defaultProps} />;

describe('<OrgDetails />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.OrgDetails')).toBeInTheDocument();
    });
});
