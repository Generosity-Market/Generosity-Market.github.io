import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { Organization } from '../src/Organization';

const mockGetOrgDataFunc = jest.fn();

const defaultProps = {
    organization: {
        name: 'My Organization',
        Preferences: [],
    },
    match: {
        params: {
            id: 0,
        },
    },
    getOrgData: mockGetOrgDataFunc,
};

const testComponent = <Organization {...defaultProps} />;

describe('<Organization />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Organization')).toBeInTheDocument();
    });

    it.skip('should fetch org data when not present', () => {
        expect(mockGetOrgDataFunc).toHaveBeenCalled();
    });

    it.todo('Test other things on the Organization page');
});
