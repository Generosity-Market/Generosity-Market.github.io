import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import TexturedCircle from '../src/TexturedCircle';

const defaultProps = {};

const testComponent = <TexturedCircle {...defaultProps} />;

describe('<TexturedCircle />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.textured')).toBeInTheDocument();
    });
});