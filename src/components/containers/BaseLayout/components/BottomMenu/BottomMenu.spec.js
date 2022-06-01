import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider } from 'utilities';

// Component import
import BottomMenu from './BottomMenu.js';
import bottomNavLinks from 'constants/BottomNavLinks';

const defaultProps = {
    navLinks: bottomNavLinks,
};

const testComponent = <BottomMenu {...defaultProps} />;

describe('<BottomMenu />', () => {
    let container;
    let getAllByRole;
    let bottomMenu;

    beforeEach(() => {
        ({
            container,
            getAllByRole,
        } = render(testComponent, { wrapper: TestProvider }));

        bottomMenu = container.querySelector('.BottomMenu');
    });

    it('renders without crashing', () => {
        expect(bottomMenu).toBeInTheDocument();
    });

    it('contains navigation links', () => {
        const navLinks = getAllByRole('link');

        expect(navLinks).toHaveLength(3);
    });
});