import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import InputGroup from '../src/InputGroup';

const defaultProps = {
    state: {
        name: '',
        tax_id: '',
    },
    inputOptions: [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Name of Organization',
        }, {
            type: 'text',
            name: 'tax_id',
            placeholder: 'Tax Id #',
        },
    ],
    handleUpdateState: () => { },
};

const testComponent = <InputGroup {...defaultProps} />;

// TODO: Investigate console warnings and errors in tests
describe('<InputGroup />', () => {

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.InputGroup')).toBeInTheDocument();
    });
});
