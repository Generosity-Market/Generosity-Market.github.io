import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { Checkout } from '../src/Checkout';

const defaultProps = {
    cart: [{
        amount: 5
    }],
};

const testComponent = <Checkout {...defaultProps} />;

describe('<Checkout />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Checkout')).toBeInTheDocument();
    });

    it.todo('Test other things on the Checkout page');
});
