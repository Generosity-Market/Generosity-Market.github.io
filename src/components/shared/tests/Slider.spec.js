import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import Slider from '../src/Slider';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const testComponent = <Slider {...defaultProps} />;

describe('<Slider />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Slider')).toBeInTheDocument();
    });
});
