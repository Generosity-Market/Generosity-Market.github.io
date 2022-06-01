import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

import { BrowserRouter } from 'react-router-dom';

// Component import
import { Splash } from '../src/Splash';

const defaultProps = {
    getCauseList: jest.fn(),
    loadTokenFromCookie: jest.fn(),
    resetPageData: jest.fn(),
};

const testComponent = <Splash {...defaultProps} />;

describe('<Splash />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Splash')).toBeInTheDocument();
    });

    it.todo('Test other things on the Splash page');
});
