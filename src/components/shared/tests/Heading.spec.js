import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import Heading from '../src/Heading';

const defaultProps = {
    text: 'Nearly Funded',
};

const testComponent = <Heading {...defaultProps} />;

describe('<Heading />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Heading')).toBeInTheDocument();
    });
});
