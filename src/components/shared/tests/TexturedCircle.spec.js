import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import TexturedCircle from '../src/TexturedCircle';

const defaultProps = {};

const testComponent = <TexturedCircle {...defaultProps} />;

describe('<TexturedCircle />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.textured')).toBeInTheDocument();
    });
});