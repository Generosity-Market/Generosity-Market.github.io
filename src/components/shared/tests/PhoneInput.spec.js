import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

import PhoneInput from '../src/PhoneInput';

const defaultProps = {
    onChange: jest.fn(),
    name: 'test-phone',
    label: 'test-phone',
    value: '',
    className: 'PhoneInput'
};

const testComponent = <PhoneInput {...defaultProps} />;

describe('<PhoneInput />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.PhoneInput')).toBeInTheDocument();
    });
});