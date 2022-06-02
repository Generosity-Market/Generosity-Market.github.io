import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

import AddressInputs from '../src/AddressInputs';

const defaultProps = {
    onChange: jest.fn(),
    name: 'test-phone',
    label: 'test-phone',
    value: '',
};

const testComponent = <AddressInputs {...defaultProps} />;

describe('<AddressInputs />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.AddressInputs')).toBeInTheDocument();
    });
});