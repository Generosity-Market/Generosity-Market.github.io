import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import MainImage from '../src/MainImage';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const testComponent = <MainImage {...defaultProps} />;

describe('<MainImage />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.MainImage')).toBeInTheDocument();
    });
});
