import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { Splash } from '../src/Splash';

const defaultProps = {
    getCauseList: jest.fn(),
    loadTokenFromCookie: jest.fn(),
    resetPageData: jest.fn(),
};

const testComponent = <Splash {...defaultProps} />;

describe('<Splash />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Splash')).toBeInTheDocument();
    });

    it.todo('Test other things on the Splash page');
});
