import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

import ReceiptItem from '../src/ReceiptItem';

const defaultProps = {
    cause: {
        Donations: [],
    },
};

const testComponent = <ReceiptItem {...defaultProps} />;

describe('<ReceiptItem />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.ReceiptItem')).toBeInTheDocument();
    });
});