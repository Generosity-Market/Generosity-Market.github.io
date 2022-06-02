import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';


// Component import
import AboutCause from './AboutCause.js';

const defaultProps = {
    title: 'Gordy Adoption',
    aboutText: 'We\'re adopting!',
    usageText: 'Will raise money for adoption expenses',
};

const testComponent = <AboutCause {...defaultProps} />;

describe('<AboutCause />', () => {
    checkConsoleWarnOrErrors();

    let container;
    let getAllByRole;
    let getByText;

    beforeEach(() => {
        ({
            container,
            getAllByRole,
            getByText,
        } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        const aboutCause = container.querySelector('.AboutCause');

        expect(aboutCause).toBeInTheDocument();
    });

    it('should have a title and about section', () => {
        expect(getAllByRole('heading')).toHaveLength(2);
    });

    it('should have correct title text', () => {
        expect(getByText(`About the ${defaultProps.title} Cause`)).toBeInTheDocument();
    });

    it('should have correct details text', () => {
        expect(getByText(defaultProps.aboutText)).toBeInTheDocument();
    });

    it('should have correct useage title text', () => {
        expect(getByText('How your gift will be used')).toBeInTheDocument();
    });

    it('should have correct useage text', () => {
        expect(getByText(defaultProps.usageText)).toBeInTheDocument();
    });
});
