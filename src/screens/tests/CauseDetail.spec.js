import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, mockState, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { CauseDetail } from '../src/CauseDetail';

const defaultProps = {
    ...mockState,
    cause: {
        ...mockState.selectedCause,
        Donations: [],
    },
    match: {
        params: {
            id: 2,
        },
    },
    setPageData: jest.fn(),
};

const testComponent = <CauseDetail {...defaultProps} />;

describe('<CauseDetail />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.CauseDetail')).toBeInTheDocument();
    });

    it.todo('Test other stuff on the CauseDetail page');
});
