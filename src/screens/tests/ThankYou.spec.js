import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import { ThankYou } from '../src/ThankYou';

const defaultProps = {
    // props...
};

const testComponent = <ThankYou {...defaultProps} />;

describe('<ThankYou />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.ThankYou')).toBeInTheDocument();
    });

    it.todo('Test other things on the ThankYou page');
});
