import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Shared UI Components
import { ActionButton } from 'components/shared';

const defaultProps = {
    action: jest.fn(),
    actionText: 'submit',
    classname: 'submit',
    icon: ''
};

const testComponent = <ActionButton {...defaultProps} />;

describe('<ActionButton />', () => {
    checkConsoleWarnOrErrors();

    let container;
    let getByText;

    beforeEach(() => {
        ({ container, getByText } = render(testComponent, { wrapper: TestProvider }));
    });

    it('should render without crashing', () => {
        expect(container.querySelector('.ActionButton')).toBeInTheDocument();
    });

    it('should have the classname passed as props', () => {
        expect(getByText('submit')).toHaveClass('submit');
    });

    it('should call the callback action function when clicked', async () => {
        const submitButton = getByText('submit');

        const user = userEvent.setup();
        await user.click(submitButton);
        expect(defaultProps.action).toHaveBeenCalled();
    });

});
