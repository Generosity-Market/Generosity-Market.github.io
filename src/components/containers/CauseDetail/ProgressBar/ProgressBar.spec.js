import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider } from 'utilities/testing';


// Component import
import ProgressBar from './ProgressBar.js';

const defaultProps = {
    goal_amount: 3500,
    totalRaised: 1250,
};

const testComponent = <ProgressBar {...defaultProps} />;

describe('<ProgressBar />', () => {
    let container;
    let getByText;

    describe('has NOT completed the goal', () => {

        beforeEach(() => {
            ({ container, getByText } = render(testComponent, { wrapper: TestProvider }));
        });

        it('renders without crashing', () => {
            expect(container.querySelector('.ProgressBar')).toBeInTheDocument();
        });

        it('should have a message showing amount raised and goal', () => {
            const { totalRaised, goal_amount } = defaultProps;
            expect(getByText(`Raised $${totalRaised} of $${goal_amount} (${(totalRaised / goal_amount * 100).toFixed(0)}%)`)).toBeInTheDocument();
        });

        it('should have the correct width based on the percentage of the gaol raised', () => {
            const { totalRaised, goal_amount } = defaultProps;
            expect(container.querySelector('.percent-bar')).toHaveAttribute('style', `width: ${(totalRaised / goal_amount * 100).toFixed(0)}%;`);
        });
    });

    describe('has completed the goal', () => {
        const completedProps = {
            goal_amount: 40000,
            totalRaised: 40000,
        };

        beforeEach(() => {
            ({
                container,
                getByText,
            } = render(<ProgressBar {...completedProps} />, {
                wrapper: TestProvider,
            }));
        });

        it('renders without crashing', () => {
            expect(container.querySelector('.ProgressBar')).toBeInTheDocument();
        });

        it('should have a message showing amount raised and goal', () => {
            expect(getByText('Goal Accomplished!!')).toBeInTheDocument();
        });

        it('should have the correct width based on the percentage of the gaol raised', () => {
            expect(container.querySelector('.percent-bar')).toHaveAttribute('style', 'width: 100%;');
        });
    });
});
