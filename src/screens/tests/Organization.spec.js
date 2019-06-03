import React from 'react';
import { shallow } from 'enzyme';

// Component import
// NOTE must be exported/imported in this manner to work around the redux connection and only test the UI
// NOTE Actions and Reducers should be tested for any other activities this component would handle.
import { Organization } from '../src/Organization';

const defaultProps = {
    organization: {
        name: 'My Organization',
        Preferences: [],
    },
};

const mockGetOrgDataFunc = jest.fn();

const wrapper = shallow(
    <Organization
        {...defaultProps}
        getOrgData={mockGetOrgDataFunc}
    />
);

describe('<Organization />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Organization')).toEqual(true);
    });

    it('should fetch org data when not present', () => {
        expect(mockGetOrgDataFunc).toBeCalled();
    });

    it.todo('Test other things on the Organization page');
});
