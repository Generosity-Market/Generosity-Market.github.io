import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider } from 'utilities/testing';

// Component import
import CartFooter from './CartFooter.js';

const defaultProps = {
    // Put props here...
};

const testComponent = <CartFooter {...defaultProps} />;

describe('<CartFooter />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.CartFooter')).toBeInTheDocument();
    });
});
