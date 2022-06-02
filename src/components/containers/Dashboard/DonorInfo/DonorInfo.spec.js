import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';


// Component import
import { DonorInfo } from './DonorInfo.js';

const defaultProps = {
    // Props go here...
};

const testComponent = <DonorInfo {...defaultProps} />;

describe('<DonorInfo />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.DonorInfo')).toBeInTheDocument();
    });
});
