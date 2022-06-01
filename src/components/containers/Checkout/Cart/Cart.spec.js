import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import Cart from './Cart.js';

const defaultProps = {
    handleSelectIcon: () => { },
    cart: [{
        cause: 'Example cause',
        amount: 54,
    }],
};

const testComponent = <Cart {...defaultProps} />;

describe('<Cart />', () => {

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.cart-container')).toBeInTheDocument();
    });
});
