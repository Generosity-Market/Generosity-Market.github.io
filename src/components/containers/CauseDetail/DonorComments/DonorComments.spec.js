import React from 'react';
import { render } from '@testing-library/react';

import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';


// Component import
import DonorComments from './DonorComments.js';

const defaultProps = {
    donations: [
        {
            name: 'Sally Givesalot',
            Comments: ['Can\'t wait to hear the stories!!'],
            comment: 'Can\'t wait to hear the stories!!',
            imageURL: 'profile.jpg',
            amount: 100
        }, {
            name: 'Bob Surrent',
            Comments: ['This sounds fun!'],
            comment: 'This sounds fun!',
            imageURL: 'profile3.jpg',
            amount: 50
        }, {
            name: 'Jim Giver',
            Comments: ['Have a great time!'],
            comment: 'Have a great time!',
            imageURL: 'profile2.jpg',
            amount: 25
        }
    ]
};

const testComponent = <DonorComments {...defaultProps} />;

describe('<DonorComments />', () => {
    checkConsoleWarnOrErrors();

    let container;
    let getByRole;

    beforeEach(() => {
        ({ container, getByRole } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.DonorComments')).toBeInTheDocument();
    });

    it('should have correct heading', () => {
        expect(getByRole('heading')).toBeInTheDocument();
    });

    it('should have same number of comment cards as donations', () => {
        expect(container.querySelectorAll('.comment-card')).toHaveLength(defaultProps.donations.length);
    });
});
