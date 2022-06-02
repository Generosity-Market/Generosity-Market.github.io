import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import OrgCauses from './OrgCauses.js';

const defaultProps = {
    causes: [],
};

const testComponent = <OrgCauses {...defaultProps} />;

describe('<OrgCauses />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.OrgCauses')).toBeInTheDocument();
    });
});
