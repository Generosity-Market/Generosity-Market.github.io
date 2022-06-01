import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestProvider } from 'utilities/testing';

// Component import
import EditProfileCTAs from './EditProfileCTAs.jsx';

const defaultProps = {
    editProfile: false,
    handleEditProfile: jest.fn(),
    handleSubmit: jest.fn(),
    handleUndoChanges: jest.fn(),
    handleCancelEdit: jest.fn(),
};

const testComponent = <EditProfileCTAs {...defaultProps} />;

describe('<EditProfileCTAs />', () => {
    let container;
    let getByText;

    beforeEach(() => {
        ({
            container,
            getByText,
        } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.edit-ctas')).toBeInTheDocument();
    });

    it('calls handleEditProfile if clicked', async () => {
        const cta = getByText('Edit Info');

        const user = userEvent.setup();
        await user.click(cta);

        expect(defaultProps.handleEditProfile).toHaveBeenCalled();
    });
});