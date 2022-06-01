import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import Popup from './popup.js';

const defaultProps = {};

const testComponent = <Popup {...defaultProps} />;

describe('<Popup />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Popup')).toBeInTheDocument();
    });
});
