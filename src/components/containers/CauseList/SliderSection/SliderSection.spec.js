import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, mockState } from 'utilities/testing';

// Component import
import SliderSection from './SliderSection.js';


const defaultProps = {
    headingText: 'Nearly Funded',
    causeList: mockState.cause.causeList,
};

const testComponent = <SliderSection {...defaultProps} />;

describe('<SliderSection />', () => {
    let container;
    let getByText;

    const observe = jest.fn();
    const unobserve = jest.fn();
    const disconnect = jest.fn();
    beforeEach(() => {
        window.IntersectionObserver = jest.fn(() => ({
            observe,
            unobserve,
            disconnect,
        }));
        ({
            container,
            getByText,
        } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.Slider')).toBeInTheDocument();
    });

    it('has a heading', () => {
        expect(getByText(defaultProps.headingText)).toBeInTheDocument();
    });

    it('calls the intersection observer api', () => {
        expect(observe).toHaveBeenCalled();
    });
});
