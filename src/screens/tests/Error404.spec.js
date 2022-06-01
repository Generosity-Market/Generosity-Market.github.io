import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';
import { BrowserRouter } from 'react-router-dom';

// Component import
import { Error404 } from '../src/Error404';

const defaultProps = {
    history: {
        goBack: jest.fn(),
    }
};

const testComponent = <Error404 {...defaultProps} />;

describe('<Error404 />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Error404')).toBeInTheDocument();
    });

    it.todo('Test other things on the 404 page');
});
