import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import CartItem from './CartItem.js';

const defaultProps = {
    // Put props here...
};

const testComponent = <CartItem {...defaultProps} />;

describe('<CartItem />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.CartItem')).toBeInTheDocument();
    });
});
