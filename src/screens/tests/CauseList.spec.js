import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, mockState, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { CauseList } from '../src/CauseList';

const defaultProps = {
    ...mockState,
    causeList: [],
    causeSelected: jest.fn(),
    getCauseList: jest.fn(),
    resetPageData: jest.fn(),
};

const testComponent = <CauseList {...defaultProps} />;

const observe = jest.fn();
const unobserve = jest.fn();
const disconnect = jest.fn();

describe('<CauseList />', () => {
    checkConsoleWarnOrErrors();

    it('should not render when there are no causes', () => {
        const { container } = render(testComponent, { wrapper: TestProvider });
        expect(container.querySelector('.CauseList')).not.toBeInTheDocument();
    });

    it('renders without crashing', () => {
        window.IntersectionObserver = jest.fn(() => ({
            observe,
            unobserve,
            disconnect,
        }));

        const newProps = {
            ...defaultProps,
            causeList: [
                {
                    id: 1,
                    icon: 'Africa'
                },
            ]
        };
        const { container } = render(<CauseList {...newProps} />, { wrapper: TestProvider });

        expect(container.querySelector('.CauseList')).toBeInTheDocument();
    });

    it.todo('Test other things on the CauseList page');
});
