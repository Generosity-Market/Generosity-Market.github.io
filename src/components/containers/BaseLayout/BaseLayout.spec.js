import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider } from 'utilities/testing';

// Component import
import BaseLayout from './BaseLayout.js';

const testComponent = <BaseLayout />;

describe('<BaseLayout />', () => {
    let container;
    let getByTestId;

    beforeEach(() => {
        ({
            container,
            getByTestId,
        } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(getByTestId('BaseLayout')).toBeInTheDocument();
    });

    it('should contain the logo image', () => {
        expect(getByTestId('menuLogo')).toBeInTheDocument();
    });

    it('should contain the bottom menu', () => {
        expect(container.querySelector('.BottomMenu')).toBeInTheDocument();
    });
});
