import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { NewOrgForm } from '../src/NewOrgForm';

const defaultProps = {
    // props...
};

const testComponent = <NewOrgForm {...defaultProps} />;

describe('<NewOrgForm />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.NewOrgForm')).toBeInTheDocument();
    });

    it.todo('Test other things on the NewOrgForm page');
});
