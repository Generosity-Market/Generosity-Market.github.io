import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { TileSection } from './TileSection.js';

const defaultProps = {
    goal_amount: 150,
    purchasedTiles: [],
    icon: 'Africa',
    name: 'Mission Trip',
};

const testComponent = <TileSection {...defaultProps} />;

describe('<TileSection />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.TileSection')).toBeInTheDocument();
    });

    it('should render donation tiles', () => {
        expect(container.querySelectorAll('.DonationTile')).not.toHaveLength(0);
    });
});
