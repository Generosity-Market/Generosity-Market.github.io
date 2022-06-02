import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';


// Component import
import IconSelector from './IconSelector.js';

const defaultProps = {
    handleSelect: jest.fn(),
};

const testComponent = <IconSelector {...defaultProps} />;

describe('<IconSelector />', () => {
    checkConsoleWarnOrErrors();

    let container;
    let getAllByAltText;

    beforeEach(() => {
        ({
            container,
            getAllByAltText,
        } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.IconSelector')).toBeInTheDocument();
    });

    it('renders all icon selections', () => {
        expect(getAllByAltText(/.*(?:)/)).toHaveLength(7);
    });

    it('focuses on selected icon', async () => {
        const firstIcon = getAllByAltText(/.*(?:)/)[0];

        const user = userEvent.setup();
        await user.click(firstIcon);

        expect(defaultProps.handleSelect).toHaveBeenCalled();
        expect(container.querySelector('.icon-tile.selected')).toBeInTheDocument();
    });
});
