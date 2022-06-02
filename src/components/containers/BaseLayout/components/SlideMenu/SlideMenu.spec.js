import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import SlideMenu from './SlideMenu.js';
import navLinks from 'constants/linksData.js';

const defaultProps = {
    navLinks: navLinks,
};

const testComponent = <SlideMenu {...defaultProps} />;

describe('<SlideMenu />', () => {
    checkConsoleWarnOrErrors();

    let container;
    let getByRole;

    beforeEach(() => {
        ({ container, getByRole } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(getByRole('navigation')).toBeInTheDocument();
    });

    it('should render a list of navigation links', () => {
        const navLinks = container.querySelector('.LinksContainer').querySelectorAll('.navLinks');
        expect(navLinks).toHaveLength(8);
    });
});
