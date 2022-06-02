import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import NavItem from './NavItem.js';

const defaultProps = {
    style: {
        color: 'white'
    },
};

const testComponent = <NavItem {...defaultProps} />;

describe('<NavItem />', () => {
    checkConsoleWarnOrErrors();

    let getByRole;

    beforeEach(() => {
        ({ getByRole } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(getByRole('link')).toBeInTheDocument();
    });

    it('should have .navLinks class', () => {
        expect(getByRole('link')).toHaveClass('navLinks');
    });
});
