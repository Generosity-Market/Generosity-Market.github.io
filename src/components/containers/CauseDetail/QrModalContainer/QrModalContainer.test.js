import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import QrModalContainer from './QrModalContainer.js';

const defaultProps = {
    name: 'My Cause - Generosity Market',
};

const testComponent = <QrModalContainer {...defaultProps} />;

describe('<QrModalContainer />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.trigger-glyph-container')).toBeInTheDocument();
    });
});
