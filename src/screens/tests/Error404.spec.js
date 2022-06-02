import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { Error404 } from '../src/Error404';

const defaultProps = {
    history: {
        goBack: jest.fn(),
    }
};

const testComponent = <Error404 {...defaultProps} />;

describe('<Error404 />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Error404')).toBeInTheDocument();
    });

    it.todo('Test other things on the 404 page');
});
