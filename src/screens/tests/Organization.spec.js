import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
// NOTE: must be exported/imported in this manner to work around the redux connection and only test the UI
// NOTE: Actions and Reducers should be tested for any other activities this component would handle.
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
