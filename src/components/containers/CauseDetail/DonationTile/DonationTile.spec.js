import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';


// Component import
import { DonationTile } from './DonationTile.js';

const defaultProps = {
    tileIcon: 'Africa',
    cart: [],
    amount: 5,
};

const testComponent = <DonationTile {...defaultProps} />;

describe('<Tile />', () => {
    checkConsoleWarnOrErrors();

    let container;
    let getByText;
    let getByAltText;

    beforeEach(() => {
        ({
            container,
            getByText,
            getByAltText,
        } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.DonationTile')).toBeInTheDocument();
    });

    it('should contain the icon image', () => {
        expect(getByAltText('Africa Icon')).toBeInTheDocument();
    });

    it('should display an amount to donate', () => {
        expect(getByText(`$${defaultProps.amount}`)).toBeInTheDocument();
    });
});
