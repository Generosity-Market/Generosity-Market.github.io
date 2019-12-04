import React from 'react';
import { shallow } from 'enzyme';

// Component import
import EditProfileCTAs from './EditProfileCTAs.jsx';

const defaultProps = {
    editProfile: false,
    handleEditProfile: jest.fn(),
    handleSubmit: jest.fn(),
    handleUndoChanges: jest.fn(),
    handleCancelEdit: jest.fn(),
};

const wrapper = shallow(<EditProfileCTAs {...defaultProps} />);

describe('<EditProfileCTAs />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});