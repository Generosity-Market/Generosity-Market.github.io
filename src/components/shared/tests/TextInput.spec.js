import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

import TextInput from '../src/TextInput';

const defaultProps = {
    value: '',
    onChange: jest.fn(),
    name: 'test-input',
    label: 'test-input',
    className: 'text-input'
};

const testComponent = <TextInput {...defaultProps} />;

describe('<TextInput />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.text-input')).toBeInTheDocument();
    });
});