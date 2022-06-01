import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import UserDetails from './UserDetails.js';

const defaultProps = {
    address: {},
    name: '',
    phone: '',
    user: {},
    editProfile: false,
    handleEditProfile: jest.fn(),
};

const testComponent = <UserDetails {...defaultProps} />;

describe('<UserDetails />', () => {

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.UserDetails')).toBeInTheDocument();
    });
});
