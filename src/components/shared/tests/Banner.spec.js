import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import Banner from '../src/Banner';

const defaultProps = {
    BGimage: 'to be decided...',
    profile_image: 'dilly dilly',
};

const testComponent = <Banner {...defaultProps} />;

describe('<Banner />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Header')).toBeInTheDocument();
    });
});
