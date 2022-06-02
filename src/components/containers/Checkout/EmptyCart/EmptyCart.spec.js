import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import EmptyCart from './EmptyCart.js';

const defaultProps = {
    // Props go here...
};

const testComponent = <EmptyCart {...defaultProps} />;

describe('<EmptyCart />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.EmptyCart')).toBeInTheDocument();
    });
});
