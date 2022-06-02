import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import CauseTile from '../src/CauseTile';

const defaultProps = {
    cause: {
        id: 1,
        goal_amount: 1000,
        name: 'Example',
        icon: '',
        profile_image: 'madi-robson-113926.jpg',
    },
};

const testComponent = <CauseTile {...defaultProps} />;

describe('<CauseTile />', () => {
    checkConsoleWarnOrErrors();

    let container;

    const observe = jest.fn();
    const unobserve = jest.fn();
    const disconnect = jest.fn();

    beforeEach(() => {
        window.IntersectionObserver = jest.fn(() => ({
            observe,
            unobserve,
            disconnect,
        }));

        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.CauseTile')).toBeInTheDocument();
    });
});
