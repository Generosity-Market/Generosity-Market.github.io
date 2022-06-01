import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider } from 'utilities/testing';

// Component import
import TopMenu from './TopMenu.js';

const defaultProps = {};

const testComponent = <TopMenu {...defaultProps} />;

describe('<TopMenu />', () => {

    let container;
    let getByTestId;

    beforeEach(() => {
        ({
            container,
            getByTestId,
        } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        const topMenu = container.querySelector('.TopMenu');

        expect(topMenu).toBeInTheDocument();
    });

    it('should contain the logo image', () => {
        expect(getByTestId('menuLogo')).toBeInTheDocument();
    });
});
