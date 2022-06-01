import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

import { BrowserRouter } from 'react-router-dom';

// Component import
import { CauseForm } from '../src/CauseForm';

const defaultProps = {};

const testComponent = <CauseForm {...defaultProps} />;

describe('<CauseForm />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.CauseForm')).toBeInTheDocument();
    });

    it.todo('test more things on the CauseForm page');
});
