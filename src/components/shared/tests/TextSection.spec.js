import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import TextSection from '../src/TextSection';

const defaultProps = {};

const testComponent = <TextSection {...defaultProps} />;

describe('<TextSection />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.TextSection')).toBeInTheDocument();
    });
});
